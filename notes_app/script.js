const APP = (function(){
    await init_scripts();




            const testApi = () => {
                
                setTimeout(function(){
                    console.log(axios); 
                }, 4000)

            }





            return {
                testApi: testApi
            }


}());

