import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './../Header/index';
import Items from './Items/index';
import { BsSearch } from 'react-icons/bs';
export class Home extends Component {

    state = {
        filteredData: "",
        flag: false,
        data: [
            {
                "Ingredient": "Carrot",
                "Shorttext": "A great starter for your baby",
                "imageUrl": "http://forking.riafy.in/csv-to-api/baby-led-weaning/images/Carrot.jpg"
            },
            {
                "Ingredient": "Butternut Squash",
                "Shorttext": "The best first food",
                "imageUrl": "http://forking.riafy.in/csv-to-api/baby-led-weaning/images/Butternut Squash.jpg"
            },
            {
                "Ingredient": "Sweet Potatoes",
                "Shorttext": "Fully cooked & soft baby food",
                "imageUrl": "http://forking.riafy.in/csv-to-api/baby-led-weaning/images/Sweet Potatoes.jpg"
            },
            {
                "Ingredient": "Yogurt",
                "Shorttext": "Make baby tummies happy",
                "Allergent": "Diary", "imageUrl": "http://forking.riafy.in/csv-to-api/baby-led-weaning/images/Yogurt.jpg"
            },
            {
                "Ingredient": "Chicken",
                "Shorttext": "A good source of protein",
                "imageUrl": "http://forking.riafy.in/csv-to-api/baby-led-weaning/images/Chicken.jpg"
            },
            {
                "Ingredient": "Salmon",
                "Shorttext": "A safe & healthy solid food",
                "imageUrl": "http://forking.riafy.in/csv-to-api/baby-led-weaning/images/Salmon.jpg"
            },
            {
                "Ingredient": "Melon",
                "Shorttext": "Rich in vitamin A & C",
                "imageUrl": "http://forking.riafy.in/csv-to-api/baby-led-weaning/images/Melon.jpg"
            },
            {
                "Ingredient": "Banana",
                "Shorttext": "Loaded with essential nutrients",
                "imageUrl": "http://forking.riafy.in/csv-to-api/baby-led-weaning/images/Banana.jpg"
            },
            {
                "Ingredient": "Apple",
                "Shorttext": "A sweet treat your baby",
                "imageUrl": "http://forking.riafy.in/csv-to-api/baby-led-weaning/images/Apple.jpg"
            },
            {
                "Ingredient": "Strawberries",
                "Shorttext": "Introduce mashed strawberries",
                "imageUrl": "http://forking.riafy.in/csv-to-api/baby-led-weaning/images/Strawberries.jpg"
            },
            {
                "Ingredient": "Broccoli",
                "Shorttext": "A nutritious green vegetable",
                "imageUrl": "http://forking.riafy.in/csv-to-api/baby-led-weaning/images/Broccoli.jpg"
            },
            {
                "Ingredient": "Egg",
                "Shorttext": "A safe early food for babies",
                "Allergent": "Egg", "imageUrl": "http://forking.riafy.in/csv-to-api/baby-led-weaning/images/Egg.jpg"
            },
            {
                "Ingredient": "Beans",
                "Shorttext": "Good source of micronutrients",
                "imageUrl": "http://forking.riafy.in/csv-to-api/baby-led-weaning/images/Beans.jpg"
            },
            {
                "Ingredient": "Cauliflower",
                "Shorttext": "For strong & healthy bones",
                "imageUrl": "http://forking.riafy.in/csv-to-api/baby-led-weaning/images/Cauliflower.jpg"
            },
            {
                "Ingredient": "Avocado",
                "Shorttext": "Serve fresh from their peels",
                "imageUrl": "http://forking.riafy.in/csv-to-api/baby-led-weaning/images/Avocado.jpg"
            },
            {
                "Ingredient": "Mango",
                "Shorttext": "Strengthen the immune system",
                "imageUrl": "http://forking.riafy.in/csv-to-api/baby-led-weaning/images/Mango.jpg"
            },
            {
                "Ingredient": "Potato",
                "Shorttext": "Energy powerhouse for babies",
                "imageUrl": "http://forking.riafy.in/csv-to-api/baby-led-weaning/images/Potato.jpg"
            },
            {
                "Ingredient": "Cereal",
                "Shorttext": "Introduce your baby to new tastes",
                "imageUrl": "http://forking.riafy.in/csv-to-api/baby-led-weaning/images/Cereal.jpg"
            },
            {
                "Ingredient": "Blueberries",
                "Shorttext": "Best baby food to to self-feed",
                "Age group": "8 Month+",
                "imageUrl": "http://forking.riafy.in/csv-to-api/baby-led-weaning/images/Blueberries.jpg"
            },
            {
                "Ingredient": "Spinach",
                "Shorttext": "An ideal veggie for babies",
                "imageUrl": "http://forking.riafy.in/csv-to-api/baby-led-weaning/images/Spinach.jpg"
            }
        ],
    }
    __searchData = (e) => {
        const filteredData = this.state.data.filter(
            item => item.Ingredient && item.Ingredient.toLowerCase().match(e.target.value.toLowerCase()),
        );
        console.log(this.state.data)
        this.setState({ flag: true, filteredData: filteredData })
    }
    render() {

        return (
            <React.Fragment>
                <Header />

                <div className='px-3 py-3'>
                    <div className=' ' >
                        <div className="input-group   b-r-10" style={{ border: 'none', outline: 'none' }}>
                            <span className="input-group-text input" id="basic-addon1" style={{ backgroundColor: '#f7f7f7', border: 'none', outline: 'none' }}><BsSearch color='black' /></span>
                            <input type="text" className="form-control common-color form-search-control py-3" onChange={(e) => this.__searchData(e)} placeholder="Food Name" aria-label="Food Name" aria-describedby="Food Name" />
                        </div>
                    </div>

                </div>
                <div className='p-3' style={{ backgroundColor: '#f7f7f7' }}>

                    <div className=''>
                        <span className='fs-5 fw-bold common-color' >Foods</span>
                    </div>
                    <div className='d-grid gap-2 ' style={{ gridTemplateColumns: 'repeat(2,1fr)', justifyItems: 'center' }}>

                        {this.state.data && this.state.data.length > 0 && !this.state.flag ? this.state.data.map((item, index) => (
                            <React.Fragment>
                                <Items key={item.id} item={item} />
                            </React.Fragment>
                        )) : this.state.filteredData && this.state.filteredData.length > 0 && this.state.filteredData.map((item, index) => (
                            <React.Fragment>
                                <React.Fragment>
                                    <Items key={item.id} item={item} />
                                </React.Fragment>
                            </React.Fragment>
                        ))}

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({})



export default connect(mapStateToProps, {
})(Home)