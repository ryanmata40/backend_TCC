require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || 'postgres',
  //operatorsAliases: false, //Para fazer config para desabilitar warn
  storage: './__tests__/database.sqlite',
  logging: false, //não mostrar logs
  define: {
    timestamps: true, //habilita campos de criação e atualização 
    underscored: true, //força a nomeação da coluna com underline... Ex: UserGroup -> user_groups
    underscoredAll: true, //habilitar underscored nos campos também
  },
};