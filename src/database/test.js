const Database = require('./db');
const createProffy = require('./createProffy')

Database.then(async (db) => {
  proffyValue = {
    name: "Diego Fernandes",
    avatar: "https://github.com/diego3g.png", 
    whatsapp: "51900000000", 
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
  }

  classValue = {
    subject: 1, 
    cost: "20", 

  }

  classScheduleValues = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]

    // await createProffy(db, { proffyValue, classValue, classScheduleValues})


    // Consultar dados

    // every the proffys

    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // Consultar os dados de umm determinado professor 
    // trazer junto os dados dele
    const selectClassesAndProffys = await db.all(`
      SELECT classes.*, proffys.*
      FROM proffys
      JOIN classes ON (classes.proffy_id = proffys.id)
      WHERE classes.proffy_id = 1
  `)

  // console.log(selectClassesAndProffys)

  // o horário que a pessoa trabalha, por exemplo é das 8h - 18h
  // o horário do time_from, 8h, precisa sr antes ou igual ao horário solicitato
  // o time_to precisa ser acima
  const selectClassesSchedule = await db.all(`
      SELECT class_schedule.*
      FROM class_schedule
      WHERE class_schedule.class_id = 1
      AND class_schedule.weekday = "0"
      AND class_schedule.time_from <= "520"
      AND class_schedule.time_to > "520"
  `)

  console.log(selectClassesSchedule)

})