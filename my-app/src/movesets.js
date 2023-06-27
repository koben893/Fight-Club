
const codingMoves = ['Redirect Component', 'fetch: DELETE', 'useEffect Hook', 'destructuring props', 'arrow function' ]
function createSet() {
    const moves = codingMoves;
    const set = [];
    for (let i = 0; i < 3; i++) {
        let index = Math.floor(Math.random() * 5);
        switch (i) {
            case 0:
                set.push(moves[index]);
                break;
            case 1:
                while (set[0] === moves[index]) { index = Math.floor(Math.random() * 5) }
                set.push(moves[index]);
                break;
            case 2:
                while (set[0] === moves[index] || set[1] === moves[index]) { index = Math.floor(Math.random() * 5) }
                set.push(moves[index]);
                break;
        }
    }
    return set;
}


for (let i = 0; i < 30; i++) {
    console.log(createSet());
}