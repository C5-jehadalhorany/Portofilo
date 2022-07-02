

import("./style.css")


const Cv = () => {

    return (<div className="cv_div">
        <div className="P_div_cv">
        <p className="cv_p"><b>I'm  Jehad ALhorane</b>   <span><b>Full stack developer</b></span></p>
        <p className="pro_p">Positive person, learnable, I love teamwork,my ambitionis <br/>to be among the largest developer team in the world</p>
        </div>
        <div className="img_andlink_cv">
        <img src="https://res.cloudinary.com/jehadforcars/image/upload/v1656526417/0db44162773ca93b3870d5047fd8e925adafed3e-fococlipping-standard_g1xxbp.png" className="img_cv" />
        <br />
        <a href="https://1drv.ms/b/s!Av-gxGidmS0CjKR8wQWnx1nP5aSJLw?e=VNWMfC" className='links'>link resume</a>
        </div>
    </div>
    )
}

export default Cv