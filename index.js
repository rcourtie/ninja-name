'use strict';

function ninja(name, sep) {
    const NINJA = {
        a: 'ka',
        b: 'zu',
        c: 'mi',
        d: 'te',
        e: 'ku',
        f: 'lu',
        g: 'ji',
        h: 'ri',
        i: 'ki',
        j: 'zu',
        k: 'me',
        l: 'ta',
        m: 'rin',
        n: 'to',
        o: 'mo',
        p: 'no',
        q: 'ke',
        r: 'shi',
        s: 'ari',
        t: 'ch',
        u: 'do',
        v: 'ru',
        w: 'mei',
        x: 'na',
        y: 'fu',
        z: 'zi',
    };

    sep = sep || '';

    const ninjaName = name.split('').map((l) => {
        return NINJA[l.toLowerCase()] || l;
    }).join(sep);

    return ninjaName;
}

module.exports = ninja;

