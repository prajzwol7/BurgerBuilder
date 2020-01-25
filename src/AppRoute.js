import Search from './View/Search/Search'
import Categories from './View/Categories/Categories'
import Category from './View/Categories/Category'
import WelcomeContent from './View/Welcome/Container/WelcomeContent'
import MovieDescription from './View/MovieDescription/MovieDescription'
export default[
{path:'/search/:search', component: Search,exact:true},
{path:'/category/:category', component:Category ,exact:true},
{path:'/categories', component: Categories,exact:true},
{path:'/:id', component: MovieDescription,exact:true},
{path:'/', component: WelcomeContent,exact:true},


];