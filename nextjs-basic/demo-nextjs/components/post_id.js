let a = []
for (let i=0;i<100;i++){
    a.push(i+1)
}

const path = a.map((e) => {
    return {params: { id: `${e}` }}
})

export {path}

