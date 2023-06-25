class Graph {
    constructor() {
        this.adjancencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjancencyList[vertex]) {
            this.adjancencyList[vertex] = []
        }
        return this
    }

    addEdge(vertex1, vertex2) {
        if(!this.adjancencyList[vertex1]) {
            this.adjancencyList[vertex1] = []
        }
        this.adjancencyList[vertex1].push(vertex2)

        if(!this.adjancencyList[vertex2]) {
            this.adjancencyList[vertex2] = []
        }
        this.adjancencyList[vertex2].push(vertex1)
        return this
    }

    traverseBFS(vertex) {

    }

    traverseDFS(vertex) {
        
    }
}



// {
//  Vancouver: ["NewDelhi", "Montreal", "Seattle", "Tokyo", "London"],
//  NewDelhi: ["Vancouver"],
//  Montreal: ["Vancouver"]
// }

const g = new Graph
console.log(g)
console.log(g.addVertex("Vancouver"))
console.log(g.addEdge("Vancouver", "Montreal"))
console.log(g.addEdge("Vancouver", "Seattle"))
console.log(g.addEdge("Tokyo", "Vancouver"))
console.log(g.addEdge("London", "Vancouver"))
console.log(g.addEdge("London", "Miami"))