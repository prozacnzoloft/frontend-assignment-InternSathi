export const HomeBanner = (props) =>{
    return(
        <div className="min-w-full h-48 sm:h-64 bg-slate-600 bg-center bg-no-repeat bg-blend-multiply" style={{
            backgroundImage: `url(${props.imageSource})`,
            backgroundSize: "cover"
          }}>

        
        
    </div>
    )
}