import PropTypes from 'prop-types'; // ES6

const Link = ({route}) => {
    return (
        <div>
             <li className="mr-3 hover:bg-lime-400 p-3 rounded-2xl"
            ><a href={route.path}>{route.name}</a></li>
        </div>
    );
};

Link.propTypes ={
    route: PropTypes.object
}
export default Link;