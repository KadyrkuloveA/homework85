const mongoose = require('mongoose');
const config = require('./config');

const Artist = require('./models/Artist');
const Album = require('./models/Album');
const Track = require('./models/Track');

const run = async () => {
    await mongoose.connect(config.database, config.databaseOptions);

    const collections = await mongoose.connection.db.listCollections().toArray();

    for (let coll of collections) {
        await mongoose.connection.db.dropCollection(coll.name);
    }

    const [firstArtist, secondArtist] = await Artist.create({
        name: 'Juice WRLD',
        description: 'Джаред Энтони Хиггинс (англ. Jarad Anthony Higgins; 2 декабря 1998, Чикаго, Иллинойс, США — 8 декабря 2019, Чикаго, Иллинойс, США), более известный по сценическому псевдониму Juice WRLD (читается как англ. Juice World, рус. Джус Ворлд) — американский рэпер, певец и автор песен. Родился в Чикаго, штат Иллинойс. Добился известности благодаря синглам «All Girls Are the Same»,«Lucid Dreams» и «Armed & Dangerous», после которых получил возможность подписать контракт с Grade A Productions и Interscope Records.',
        image: 'ixyAEs6kYlAIiKBXvqRX5.png'
    },{
        name: 'Lil Uzi',
        description: 'Саймир Вудс (англ. Symere Woods, 31 июля 1994, Филадельфия, Пенсильвания, США), более известный как Lil Uzi Vert — американский хип-хоп-исполнитель и автор песен. Получил признание после выпуска своего дебютного сингла «Money Longer» и нескольких микстейпов, включая Luv is Rage, Lil Uzi Vert vs. World и The Perfect Luv Tape. Lil Uzi Vert также сотрудничал с различными рэперами, в особенности с Migos в песне «Bad and Boujee», которая достигла первой строчки Billboard Hot 100.',
        image: 'fWZeyoeKKP7lWp_XW7ruf.png'
    });

    const [firstAlbum, secondAlbum, thirdAlbum] = await Album.create({
        artist: firstArtist,
        title: 'Goodbye & Good Riddance',
        date: 2018,
        image: 'QFfufBOJkE7XowmM4U-gH.jpg'
    }, {
        artist: firstArtist,
        title: 'Death Race for Love',
        date: 2019,
        image: '4iDm11Ze6MOPxYmbcYgCC.jpg'
    }, {
        artist: secondArtist,
        title: 'Luv Is Rage 2',
        date: 2017,
        image: 'tLt-G-D9MB405__WiqBkh.jpg'
    });

    await Track.create({
        album: firstAlbum,
        title: 'Lucid Dreams',
        duration: 310,
        order: 1
    }, {
        album: firstAlbum,
        title: 'Armed & Dangerous',
        duration: 330,
        order: 2
    }, {
        album: secondAlbum,
        title: 'Robbery',
        duration: 288,
        order: 1
    }, {
        album: thirdAlbum,
        title: 'XO Tour Lif3',
        duration: 339,
        order: 1
    }, {
        album: thirdAlbum,
        title: 'Sauce It Up',
        duration: 332,
        order: 2
    });

    mongoose.connection.close();
};

run().catch(e => {
    mongoose.connection.close();
    throw e;
});