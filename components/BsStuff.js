import school from '../images/school.jpeg';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';


const BsStuff = () => {


    return (
        <div className="border border-primary">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={school} height="450px" alt="First slide" />
                       
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={img1} height="450px" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={img2} height="450px"  alt="Third slide" />
                    </div>
                  
                   </div>

                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default BsStuff;