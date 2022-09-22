import './App.css';

function Header() {
    return (
        <>
            <header className='header'>
                <div className='wrap'>
                    <div className='h-title-logo'>
                        <b>Feane</b>
                    </div>
                    <div className='h-items'>
                        <ul>
                            <li>
                                <a href='#' className='h-menu' style={{color: '#ffbe33'}}>HOME</a>
                            </li>
                            <li>
                                <a href='#' className='h-menu'>MENU</a>
                            </li>
                            <li>
                                <a href='#' className='h-menu'>ABOUT</a>
                            </li>
                            <li>
                                <a href='#' className='h-menu'>BOOK TABLE</a>
                            </li>
                        </ul>
                    </div>
                    <div className='h-icon-menu'>
                        <a className='h-icon' href='#'>
                            <i className='fa fa-user' aria-hidden='true'></i>
                        </a>
                        <a className='h-icon' href='#'>
                            <i className='fa fa-shopping-cart' aria-hidden='true'></i>
                        </a>
                        <a className='h-icon' href='#'>
                            <i className='fa fa-search' aria-hidden='true'></i>
                        </a>
                        <a href='#' className='h-order-online'>
                            Order Online
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;