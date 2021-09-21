const ConferencistasService = require("../services/conferencistas");
const conferencistasService = new ConferencistasService();

const resolvers = {
  Conferencistas: {
    nombres: (conferencistas) => conferencistas.nombres,
  },
  Query: {
    conferencista: (_, { id }) => conferencistasService.getOne(id),
    conferencistas: () => conferencistasService.getAll(),
  },
};

module.exports = resolvers;
