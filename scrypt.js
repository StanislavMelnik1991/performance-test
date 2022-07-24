const test = () => {
    const arr = new Array(100000).fill(0);
    const b = function (f, c) {
        let date = Date.now();
        for (let i = 0; i < c; i++) {
            f()
    
        }
        return (Date.now() - date);
    }
    return b(() => {
        arr.map((e) => {
            const a = Math.sin(e + 1) + Math.sin(e + 2) + Math.sin(e + 3) + Math.sin(e + 4) + Math.sin(e + 5)
            return a;
        })
        arr.map((e) => {
            const a = e + 1;
            return (a + 1)
        })
    }, 1000)
}


const root = document.querySelector('#root')
if (!root) {
    throw new Error('where root?!')
}
const result = document.createElement('p')
result.textContent = test()



root.appendChild(result)

