// Implementing DFS and BFS on a graph

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
    DFSRecursive(start){
        var result = [];
        var visited = {};
        var adjacencyList = this.adjacencyList;

        function DFS(vertex){
            if(!vertex){
                return null;
            }
            result.push(vertex);
            visited[vertex] = true;
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return DFS(neighbor);
                }
            });
        }
        DFS(start);
        return result;
    }
    DFSIterative(start){
        var result = [];
        var visited = {};
        var stack = [start];
        var currentVertex;
        
        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }
    BFS(start){
        var queue = [start];
        var result = [];
        var visited = {};
        var currentVertex;
        visited[start] = true;

        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}

var myGraph = new Graph();

myGraph.addVertex("A");
myGraph.addVertex("B");
myGraph.addVertex("C");
myGraph.addVertex("D");
myGraph.addVertex("E");
myGraph.addVertex("F");

myGraph.addEdge("A", "B");
myGraph.addEdge("A", "C");
myGraph.addEdge("B", "D");
myGraph.addEdge("C", "E");
myGraph.addEdge("D", "E");
myGraph.addEdge("D", "F");
myGraph.addEdge("E", "F");

console.log(myGraph.BFS("A"));