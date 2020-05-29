import Student from "../models/Student";
import Person from "../models/Person";
import Campus from "../models/Campus";

class StudentController {
  async createStudent(req, res) {
    try {
      const { dni, name, lastname, id_campus, profile } = req.body;
      const person = await Person.create(
        {
          dni: dni,
          name: name,
          lastname: lastname,
          Student: {
            id_campus: id_campus,
            profile: profile,
          },
        },
        { include: [Student] }
      );
      res.status(200).json(person);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Internal server error" });
    }
  }

  async getAllStudents(req, res) {
    try {
      const students = await Student.findAll({ include: [Person, Campus] });
      res.status(200).json(students);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "error server" });
    }
  }

  async getStudentById(req, res) {
    try {
      const student = await Student.findByPk(req.params.dni, {
        include: [Person, Campus],
      });
      res.status(200).json(student);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "error server" });
    }
  }
}

const studentController = new StudentController();

export default studentController;
