import React from 'react';
import ReactDOM from 'react-dom';
import fetchJsonp from 'fetch-jsonp';
111111111111111111
111111111111111111
111111111111111111
111111111111111111
111111111111111111
111111111111111111

111111111111111111
111111111111111111
function MyFetchJsonp(url, options) {
    return fetchJsonp(url, options).then(res => {
        return res.json();
    }).then(data => {
        return data;
    })
}
1212
class App extends React.Component {

    state = {
        city: "",
        data: {}
    }

11212312312
    fetchDate = async () => {
        let city = this.state.city;
        let data = await MyFetchJsonp(`https://bird.ioliu.cn/weather?city=${city}`, {jsonpCallback: 'callback'});

        let {result} = JSON.parse(data)
        console.log(result)
        this.setState(
            {data: result}
        )

    };
    handleChange = (ev) => {
        this.setState({
            city: ev.target.value
        })
    }
111111111
    render() {
        let {data} = this.state
        return (<div>
                <h2>fetch-jsonp跨域取数据</h2>
                城市名：<input type="text" value={this.state.city} onChange={this.handleChange} placeholder="请输入城市名字"/>
                <button onClick={this.fetchDate}>获取数据</button>
                <ul>
                    <li>城市：{data.city}</li>
                    <li>天气：{data.weather}</li>
                    <li>最低温度：{data.templow}</li>
                    <li>最高温度：{data.temphigh}</li>

                </ul>
            </div>
        )
    }
}
11111111111111
ReactDOM.render(
    <App/>
    , document.querySelector("#root"));
