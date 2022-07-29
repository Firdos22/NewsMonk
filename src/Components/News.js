import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super();
            this.state ={
            articles: [],
            loading : false,
            page : 1

        }   
     }

     async componentDidMount(){

        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=17fc96ffeb8c41bf8775b5acd28f8e64&page=1pageSize=10";
        let data = await fetch(url);

        let parsedData = await data.json();

        console.log(parsedData);
        this.setState({articles:parsedData.articles,totalArticles:parsedData.totalResults})
     }

     handlePrevCLick = async ()=> {
        console.log("Previous");
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=17fc96ffeb8c41bf8775b5acd28f8e64&page=${this.state.page-1}&pageSize=10`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState()
            this.setState({
                page: this.state.page - 1,
                articles:parsedData.articles
            })
     }

    handleNextCLick = async ()=> {
        console.log("Next");
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/10)){
            
        }
        else{
            let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=17fc96ffeb8c41bf8775b5acd28f8e64&page=${this.state.page+1}&pageSize=10`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
                this.setState()
                this.setState({
                page: this.state.page + 1,
                articles:parsedData.articles
            })}
       
     }
     
  render() {
    return (
        <div className="container my-3">
            <h1>NewsMonk - Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                             <NewsItem  title={element.title? element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl = {element.url}/>
                            </div>
                        })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePrevCLick}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextCLick}>Next &rarr;</button>
                </div>
        </div>
        
    )
  }
}

export default News
