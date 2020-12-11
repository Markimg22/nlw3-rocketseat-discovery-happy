const Database = require('./db.js')
const saveOrphanage = require('./saveOrphanage.js')

/**
 * - Inserir dados da tabela
 * - Consultar dados da tabela
 * - Filtragem de consulta
 * - Deletar dado da tabela
 */
Database.then(async db => {
  // await saveOrphanage(db, {
  //   lat: '-15.6037163',
  //   lng: '-56.1328712',
  //   name: 'Lar dos Meninos',
  //   about: 'Presta Assistência meninas de 05 a 15 anos',
  //   whatsapp: '891231231',
  //   images: [
  //     'https://fofuuu.com/wp-content/uploads/2018/10/crian%C3%A7a-autista-brincando-1-e1539097039554.png',
  //     'https://conteudo.imguol.com.br/c/entretenimento/c3/2020/02/18/rotulos-criancas-1582050354281_v2_450x337.jpg'
  //   ].toString(),
  //   instructions: 'Venha trazer amor e alegria para as crianças',
  //   opening_hours: 'Horário de visitas das 8h até 18h',
  //   open_on_weekends: '0'
  // })

  // const selectedOrphanages = await db.all('SELECT * FROM orphanages')
  // console.log(selectedOrphanages)

  // const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
  // console.log(orphanage)

  // console.log(await db.run('DELETE FROM orphanages WHERE id = "4"'))
})