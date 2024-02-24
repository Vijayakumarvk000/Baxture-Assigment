import { Component } from "react";
import ProfileNextTab from "./ProfileNextTab";
import { ThreeCircles } from "react-loader-spinner";

class BaxtureList extends Component {

    state = { apiDataSeparate: [], spinnerBox: true }

    componentDidMount() {
        this.apiFunctionCall()
    }

    apiFunctionCall = async () => {
        // const apiLink = await fetch("https://apis.ccbp.in/blogs")

        const apiLink = await fetch("https://jsonplaceholder.typicode.com/users")
        const apiDataSeparate = await apiLink.json()
        console.log(apiDataSeparate)

        const newApi = apiDataSeparate.map(eachId => ({
            id: eachId.id,
            fullName: eachId.name,
            emailID: eachId.email,
            userPhone: eachId.phone,
            imageurl: eachId.image_url,
            website: eachId.website,
            username: eachId.username
        }))

        this.setState({
            apiDataSeparate: newApi,
            spinnerBox: false
        })

        console.log(apiDataSeparate)
    }

    render() {
        const { apiDataSeparate, spinnerBox } = this.state

        return (
            <div style={{ marginLeft: "100px" }}>
                <div className="d-flex flex-wrap gap-4 ps-4 ">
                    {
                        spinnerBox ?
                            <ThreeCircles
                                visible={true}
                                height="100"
                                width="100"
                                color="#4fa94d"
                                ariaLabel="three-circles-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            /> :
                            apiDataSeparate.map(eachItem => <ProfileNextTab apiTransfer={eachItem} key={eachItem.id} />)
                    }
                </div>
            </div>
        )
    }

}

export default BaxtureList;