import clgvideo from '../images/promo sairam.mp4'
import Timer from './Timer';

const Home = () => {
    return (  
        <>
               <div id="homeid" className="videorunsection w-full h-screen static ">

               <div className="contentsection w-4/5 h-screen bg-ourpurple/90 right-0 absolute">  
                    <div className="homecontent text-white w-5/5 h-full top-0 flex justify-center  items-center	relative">
                        <div className="contentalone md:mt-6 lg:mt-0">
                        <p class="text-lg mt-10 sm:text-xl lg:text-2xl">
                            <h3 class="text-2xl sm:text-3xl lg:text-4xl md:text-center"> 
                            <b> Registration closed </b></h3> 
                            <br class="hidden sm:hidden lg:block"></br>
                            <h3 class="text-xl lg:text-3xl"> <b> Conference date: </b> </h3>
                            <br class="hidden sm:hidden lg:block"></br>9th - 10th November 2022
                        </p>
                            <br className='hidden md:block'/><br />
                            <h3 className='text-xl w-5/5 lg:text-4xl text-center'> <b>Conference starts in </b> </h3> <br />
                            <Timer /> 
                            <br /><br />
                        </div>
                        
                    </div>
                    
                </div> 
                
               <video src={clgvideo} className="w-full h-screen object-cover" autoPlay loop muted  type="video/mp4"/> 
               
                
 
         </div>
            
        </>
    );
}
 
export default Home;