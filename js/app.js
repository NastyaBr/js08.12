console.log('App was loaded...');

let inputString = prompt('Enter your 4 symbols here:');
inputString = inputString.toLowerCase();

const alphabet = {
    a : 'Alfa',
    b :	'Bravo',
    c : 'Charlie',
    d :	'Delta',
    e : 'Echo',
    f : 'Foxtrot',
    g : 'Golf',
    h : 'Hotel',
    i : 'India',
    j : 'Juliet',
    k : 'Kilo',
    l : 'Lima',
    m : 'Mike',
    n : 'November',
    o : 'Oscar',
    p : 'Papa',
    q : 'Quebec',
    r : 'Romeo',
    s : 'Sierra',
    t : 'Tango',
    u : 'Uniform',
    v : 'Victor',
    w : 'Whiskey',
    x : 'X-ray',
    y : 'Yankee',
    z : 'Zulu',
    0 : 'Nadazero',
    1 : 'Unaone',
    2 : 'Bissotwo',
    3 : 'Terrathree',
    4 : 'Kartefour',
    5 : 'Pantafive ',
    6 : 'Soxisix',
    7 : 'Setteseven',
    8 : 'Oktoeight',
    9 : 'Niner'
    }
inputString.split('');
console.log(`${alphabet[(inputString[0])]} ${alphabet[(inputString[1])]} ${alphabet[(inputString[2])]} ${alphabet[(inputString[3])]}`);

