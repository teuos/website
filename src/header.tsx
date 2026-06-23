import './header.css'

function header(){
    return (
        <header className='header'>
            <nav className='nav'>
                <div className='textbox'><a>Welcome to&nbsp;</a><a className='highlight'>teuos.net</a></div>
            </nav>
        </header>
    );
}

export default header;