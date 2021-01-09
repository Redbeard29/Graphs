// Building an undirected graph to represent flights on a mock airline

class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
        else{
            return "Invalid entry";
        }
    }
    removeEdge(vertex1, vertex2){
        if(vertex1 && vertex2){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
                vertex1 => vertex1 !== vertex2
            );
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
                vertex2 => vertex2 !== vertex1
            );
        }
        else{
            return "Invalid request";
        }
    }
    removeVertex(vertex){
        if(vertex){
            while(this.adjacencyList[vertex].length){
                var adjVertex = this.adjacencyList[vertex].pop();
                this.removeEdge(vertex, adjVertex);
            }
            delete this.adjacencyList[vertex];
        }
        else{
            return "Invalid request";
        }
    }
}

var myGraph = new Graph();

myGraph.addVertex("Tokyo");
myGraph.addVertex("San Francisco");
myGraph.addVertex("Dubai");
myGraph.addVertex("Dallas");
myGraph.addVertex("Aspen");
myGraph.addVertex("Los Angeles");
myGraph.addVertex("Denver");
myGraph.addEdge("Dallas", "Tokyo");
myGraph.addEdge("Aspen", "Dallas");
myGraph.addEdge("San Francisco", "Los Angeles");
myGraph.addEdge("Dubai", "Los Angeles");
myGraph.addEdge("Dallas", "Los Angeles");
myGraph.addEdge("San Francisco", "Denver");
myGraph.addEdge("Denver", "Dallas");
myGraph.addEdge("Denver", "Aspen");
myGraph.addEdge("Tokyo", "Los Angeles");
myGraph.removeEdge("Los Angeles", "Dallas");
myGraph.removeVertex("Dallas");


console.log(myGraph);