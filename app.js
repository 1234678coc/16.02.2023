const express = require('express')
const app = express()
app.set('view engine', 'ejs')

app.use('/contact', function (request, response) {
response.render("contact", {
title: 'Мои Контакты',
emailsVisible: true,
emails: ["gavgavenycorp.com", 'mioaw@aycorp.com'],
phone: '+1234567890',
  })
})

app.use('/fio', function (request, response){
  response.render('fio', {
      fam: 'Zalupski',
      name: 'Petrosian',
      otc: 'Kchairbolatovich',
  })

})

app.use('/bio', function (request, response){
  response.render('bio', {
      bio1: 'My name is Petrosian, mne 16 let, ya rabotay profesionalnym hakerom v gorode Pod-Zalypinsk',
      bio2: 'ya lyublyu igrat v bravl stars',
  })

})
app.use('/naviky', function (request, response){
  response.render('naviky', {
      navik: 'Moi Naviky:',
      navik1: 'vzlom brawl starsa',
      navik2: 'profecional voin',
      uvlechenia: 'Moi uvlechenia:',
      uvlechenia1: 'igray palchikom u sebya v pope'
  })

})
app.use('/languages', function (request, response){
  response.render('languages', {
      languages: 'Yaziki kotorie ya znay',
      csharp: 'C#',
      cplus: 'c++',
      python: 'python',
  })
})

app.use('/', function (request, response) {
response.send('Tnasnan crpannya')
})

app.listen(300)