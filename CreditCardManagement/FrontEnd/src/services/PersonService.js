import axios from "axios";

const PERSON_API_BASE_URL = "http://localhost:8080/creditsystem/allpeople";
class PersonService {
  getPeople(){
    return axios.get(PERSON_API_BASE_URL);
  }

  getPersonById(personId) {
    return axios.get(PERSON_API_BASE_URL + "/" + personId);
  }

  updatePerson(person, personId) {
    return axios.put(PERSON_API_BASE_URL + "/" + personId, person);
  }

  deletePerson(personId) {
    return axios.delete(PERSON_API_BASE_URL + "/" + personId);
  }
}

export default new PersonService();
