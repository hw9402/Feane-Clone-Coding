import './App.css';

function Section() {
    return (
        <section className='section'>
            <div className='wrap'>
                <div className='s-slide-container'>
                    <div className='s-slide'>
                        <h1>Fast Food Restaurant</h1>
                        <p>
                            Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                        </p>
                        <a className='h-order-online'>
                            Order Now
                        </a>
                    </div>
                </div>
                <div className='s-discount-box-container'>
                    <div className='s-discount-box'>
                        <div className='s-img-box'>
                            <img src='https://technext.github.io/feane/images/o1.jpg' />
                        </div>
                        <div className='s-box-content'>
                            <h5>
                                Tasty Thursdays
                            </h5>
                            <h6>
                                <span>20%</span> Off
                            </h6>
                            <a className='h-order-online'>
                                Order Now
                                <i className='fa fa-shopping-cart' aria-hidden='true'></i>
                            </a>
                        </div>
                    </div>
                    <div className='s-discount-box'>
                        <div className='s-img-box'>
                            <img src='https://technext.github.io/feane/images/o2.jpg' />
                        </div>
                        <div className='s-box-content'>
                            <h5>
                                Pizza Days
                            </h5>
                            <h6>
                                <span>15%</span> Off
                            </h6>
                            <a className='h-order-online'>
                                Order Now
                                <i className='fa fa-shopping-cart' aria-hidden='true'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section;