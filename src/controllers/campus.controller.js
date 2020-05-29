import Campus from "../models/Campus";
import Student from "../models/Student";

class CampusController {
  async createCampus(req, res) {
    try {
      const newCampus = await Campus.create({
        name: req.body.name,
      });
      res.status(200).json({ newCampus });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  }
  async getAllCampus(req, res) {
    const campuses = await Campus.findAll();
    res.status(200).json(campuses);
  }
  async getCampusById(req, res) {
    const campus = await Campus.findByPk(req.params.id);
    res.status(200).json(campus);
  }

  async deleteCampus(req, res) {
    const id_campus = req.params.id;
    const result = await Campus.destroy({
      where: {
        id_campus,
      },
    });
    res.status(200).json({ result });
  }
}

const campusController = new CampusController();

export default campusController;
