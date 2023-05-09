import { faker } from '@faker-js/faker';
import React from 'react';
import { servicesData } from '../data/data';
import Title from './Title';

const Services = () => {
    // console.log(servicesData);
    return (
        <React.Fragment>
            <section className="section services" id="services">

                <Title title="our" subTitle="services" />
                {/* <div className="section-title">
                    <h2>our <span>services</span></h2>
                </div> */}

                <div className="section-center services-center">

                    {
                        servicesData.map((service, index) => {
                            return <article key={index} className="service">
                                <span className="service-icon"><i className={service.icon}></i></span>
                                <div className='service-info'>
                                    <h4 className="service-title">{service.title}</h4>
                                    <p className="service-text">
                                        {faker.lorem.lines(3)}
                                    </p>
                                </div>
                            </article>
                        })
                    }
                    {/* <article className="service">
                        <span className="service-icon"><i className="fas fa-wallet fa-fw"></i></span>
                        <div className="service-info">
                            <h4 className="service-title">saving money</h4>
                            <p className="service-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Asperiores, officia.
                            </p>
                        </div>
                    </article>

                    <article className="service">
                        <span className="service-icon"><i className="fas fa-tree fa-fw"></i></span>
                        <div className="service-info">
                            <h4 className="service-title">endless hiking</h4>
                            <p className="service-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Asperiores, officia.
                            </p>
                        </div>
                    </article>

                    <article className="service">
                        <span className="service-icon"><i className="fas fa-socks fa-fw"></i></span>
                        <div className="service-info">
                            <h4 className="service-title">amazing comfort</h4>
                            <p className="service-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Asperiores, officia.
                            </p>
                        </div>
                    </article> */}
                </div>
            </section>
        </React.Fragment>
    )
}

export default Services