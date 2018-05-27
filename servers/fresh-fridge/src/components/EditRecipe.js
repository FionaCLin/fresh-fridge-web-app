import React from 'react';
import constants from '../constants/';
import { connect } from 'react-redux';
import bg_img from '../constants/globalFunctions';
import { isUndefined, isNull, isNullOrUndefined } from 'util';
import Link from 'react-router-dom/Link';
import axios from 'axios';

class EditRecipe extends React.Component {
    constructor(props) {
        super(props);
        let recipe = null;

        if (this.props.match.params.mode == 'edit') {
            recipe = this.props.recipeInfo.find(x => x.id == this.props.match.params.id)
        } else {
            recipe = {
                name: '',
                method: '',
                ingredients: [],
                macros: {
                    Energy: 452,
                    Carbs: 36,
                    Protein: 6,
                    Fats: 20,
                    Sodium: 2
                },
                img: []
            }
        }

        console.log(recipe.img);
        this.state = {
            ingredientsProp: [],
            string: '',
            measure: '',
            amount: '',
            nbdno: '',
            name: recipe.name,
            ingredients: recipe.ingredients,
            method: recipe.method,
            macros: recipe.macros,
            img: recipe.img
        }
    }

    autocomplete = (e) => {
        e.preventDefault();
        let ingredientsProp = [];
        let string = e.target.value;
        axios.get('https://api.nal.usda.gov/ndb/search/?format=json&q=' + string + '&sort=n&max=10&ds=Standard%20Reference&offset=0&api_key=htxW1QWvNs6YWr0VnMHsygsKvycRRjM0Z5Q2Q2Py')
            .then((response) => {
                let data = response.data;
                if (!isUndefined(data.list)) {
                    data.list.item.forEach((item) => {
                        ingredientsProp.push({
                            nbdno: item.nbdno,
                            name: item.name
                        });
                    });
                    this.setState({ingredientsProp});
                }
                this.setState({string});
            });
    }

    addIngredient = (e) => {
        e.preventDefault();
        let { ingredients } = this.state;
        let ingredient = {
            amount: this.state.amount,
            measure: this.state.measure,
            name: this.state.string,
            nbdno: this.state.nbdno
        }
        ingredients.push(ingredient);
        this.setState({ingredients});
        let string = '';
        this.setState({string});
        let amount = '';
        this.setState({amount});
        let measure = '';
        this.setState({measure});
    }

    // pickIngredient = (e, ingredient) => {
    //     console.log("PICKED");
    //     e.preventDefault();
    //     this.setState({nbdno: ingredient.nbno});
    // }

    ingredientStringify = (ingredient) => {
        return ingredient.amount + ' ' + ingredient.measure + ' of ' + ingredient.name;
    }

    changeMeasure = (e) => {
        e.preventDefault();
        let measure = e.target.value;
        this.setState({measure});
    }

    changeAmount = (e) => {
        e.preventDefault();
        let amount = e.target.value;
        this.setState({amount});
    }

    removeIngredient = (e, ingredient) => {
        e.preventDefault();
        let { ingredients } = this.state;
        ingredients.splice(ingredients.indexOf(ingredient), 1);
        this.setState({ingredients});
    }

    changeTitle = (e) => {
        e.preventDefault();
        let { name } = this.state;
        name = e.target.value;
        this.setState({name});
    }

    changeMethod = (e) => {
        e.preventDefault();
        let { method } = this.state;
        method = e.target.value;
        this.setState({method});
    }

    changeImg = (e, index) => {
        e.preventDefault();
        let { img } = this.state;
        let image = e.target.value.split('\\');
        img[index] = 'images/' + image[image.length - 1];
        this.setState({img});
    }

    // getIngredientMacros = () => {
    //     let ingredients = this.state.ingredients;
    //     ingredients.forEach((ingredient) => {
    //         console.log("INGREDIENT", ingredient);
    //         axios.get('https://api.nal.usda.gov/ndb/reports/?ndbno=' + ingredient.nbdno + '&type=f&format=json&api_key=htxW1QWvNs6YWr0VnMHsygsKvycRRjM0Z5Q2Q2Py')
    //             .then((response) => {
    //                 let data = response.data;
    //                 console.log("RESPONSE", data);
    //             });
    //     });
    // }

    editRecipe = (e) => {
        e.preventDefault();
        // let recipes = this.props.recipeInfo;
        // let recipe = {
        //     id: 600,
        //     creator: this.props.curr_user,
        //     name: this.state.name,
        //     img: this.state.img,
        //     macros: {
        //         Energy: 452,
        //         Carbs: 36,
        //         Protein: 6,
        //         Fats: 20,
        //         Sodium: 2
        //     },
        //     method: this.state.method,
        //     ingredients: this.state.ingredients,
        //     comments: []
        // };
        // if (this.props.match.params.mode == 'edit') {
        //     let recipeIndex = recipes.indexOf(recipes.find(x => x.id == this.props.match.params.id));
        //     recipes[recipeIndex] = recipe;
        // } else {
        //     recipes.unshift(recipe);
        // }
        // this.props.editRecipes(recipes);
        // console.log("Enter", recipe);
        let images = [];
        this.state.img.forEach((item) => {
            if (!isNullOrUndefined(item)) images.push(item);
        })
        this.getIngredientMacros();

        let recipe = {
            name: this.state.name,
            method: this.state.method,
            images: images.join(','),
        }
        console.log("ENTER");
    }



    render() {
        return (
            <div class="recipe_container">
                <h4>{ (this.props.match.params.mode == 'add') ? "New" : "Edit"} Recipe</h4>
                <br></br>
                <form>
                    <div class="form-group row">
                        <label for="inputTitle" class="col-sm-2 col-form-label">Title</label>
                        <div class="col-sm-10">
                            <input type="title" value={this.state.name} onChange={(e) => this.changeTitle(e)} class="form-control" id="inputTitle" placeholder="Recipe title"></input>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputIngredients" class="col-sm-2 col-form-label">Ingredients</label>
                        <div class="col-sm-10">
                            <input name="amount" value={this.state.amount} onChange={(e) => this.changeAmount(e)} placeholder="amount e.g. 1" size="8" style={{float: "left", width:"150px", height: "32px"}}></input>
                            <select value={this.state.measure} onChange={(e) => this.changeMeasure(e)} style={{float: "left", height: "32px"}}>
                                <option></option>
                                <option>g</option>
                                <option>ml</option>
                                <option>tbsp</option>
                                <option>tsp</option>
                                <option>cup(s)</option>
                            </select>
                            <div style={{float: "left", marginLeft:"10px", marginRight:"20px", lineHeight:"32px"}}>of</div>
                            <input list="ingredients" value={this.state.string} name="ingredients" placeholder="ingredient" onChange={(e) => this.autocomplete(e)} style={{float: "left", width: "510px", height: "32px"}}></input>
                            <datalist id="ingredients">
                                {
                                    this.state.ingredientsProp.map((ingredient) => {
                                        return <option onClick={(e) => this.pickIngredient(e, ingredient) }>{ingredient.name}</option>
                                    })
                                }
                            </datalist>
                            <button style={{float: "right"}} onClick={(e) => this.addIngredient(e)} class="btn btn-secondary">+</button>
                            { (this.state.ingredients.length !== 0) ?
                                <ul style={{float: "left", marginTop: "5px"}} >
                                    {
                                        this.state.ingredients.map((ingredient) => {
                                            return <li><button onClick={(e) => this.removeIngredient(e, ingredient)} class="btn btn-secondary" style={{marginTop:"10px", width: "750px", textAlign:"left"}}>
                                                        {this.ingredientStringify(ingredient)}
                                                        <span class="pull-right">
                                                            <span class="glyphicon glyphicon-remove">
                                                            </span>
                                                        </span>
                                                    </button></li>
                                        })
                                    }
                                </ul> : null
                            }
                        </div>
                    </div>
                    
                    <div class="form-group row">
                        <label for="inputMethod" class="col-sm-2 col-form-label">Method</label>
                        <div class="col-sm-10">
                        <textarea type="comment" onChange={(e) => this.changeMethod(e)} value={this.state.method} class="form-control" id="inputMethod" rows="5" placeholder="Add method..."></textarea>
                        </div>
                    </div>
                    <hr></hr>
                    <h4>Recipe Images</h4>
                    <br></br>
                    <div class="form-group row">
                        <label for="inputImage1" class="col-sm-2 col-form-label">Image 1</label>
                        <div class="col-sm-10">
                            <div style={{float:"left"}}>
                                <input onChange={(e) => this.changeImg(e, 0)} type="file" class="form-control-file" id="inputImage1"></input>
                            </div>
                            { (!isNullOrUndefined(this.state.img[0])) ?
                                <div style={{float:"right"}}>
                                    <div style={bg_img(this.state.img[0])} class="planner_img_v"></div>
                                <div class="pic_bottom">Current Image</div>
                                </div> : null
                            }
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputImage1" class="col-sm-2 col-form-label">Image 2</label>
                        <div class="col-sm-10">
                            <div style={{float:"left"}}>
                                <input onChange={(e) => this.changeImg(e, 1)} type="file" class="form-control-file" id="inputImage1"></input>
                            </div>
                            { (!isNullOrUndefined(this.state.img[1])) ?
                                <div style={{float:"right"}}>
                                    <div style={bg_img(this.state.img[1])} class="planner_img_v"></div>
                                <div class="pic_bottom">Current Image</div>
                                </div> : null
                            }
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputImage1" class="col-sm-2 col-form-label">Image 3</label>
                        <div class="col-sm-10">
                            <div style={{float:"left"}}>
                                <input onChange={(e) => this.changeImg(e, 2)} type="file" class="form-control-file" id="inputImage1"></input>
                            </div>
                            { (!isNullOrUndefined(this.state.img[2])) ?
                                <div style={{float:"right"}}>
                                    <div style={bg_img(this.state.img[2])} class="planner_img_v"></div>
                                <div class="pic_bottom">Current Image</div>
                                </div> : null
                            }
                        </div>
                    </div>
            </form>
            <div style={{float:"right"}}>
                <Link to="../../recipes"><button class="btn btn-secondary" style={{width:"110px", marginRight:"10px"}}>Cancel</button></Link>
                <button class="btn btn-success" onClick={(e) => this.editRecipe(e)} style={{width:"115px"}}><Link to="../../recipes">{ (this.props.match.params.mode == 'add') ? "Create" : "Edit"}</Link></button>
            </div>
            {/* <!--container end--> */}
            </div>
        )
    }
}

export default EditRecipe;
