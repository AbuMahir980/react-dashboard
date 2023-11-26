import '../../../css/header.css'

const Header = () => {
    return(
        <>
            <a className="header" href="#0">
                <i className="fa fa-bars"></i>
                <div className="header-user"><i className="fas fa-user-circle icon"></i>Hello</div>
            </a>
        </>
    )
}

export default Header