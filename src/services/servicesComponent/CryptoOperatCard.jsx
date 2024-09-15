import React from 'react'

const CryptoOperatCard = () => {
  return (
    <div className=' mt-10  bg-green-300/35 py-8 rounded-xl px-3 lg:px-7 '>
          <h2 className="text-3xl text-center font-bold text-[#ffdb8a] py-4 mx-auto">How Crypto Scammers Operate</h2>
    <div className="flex flex-col lg:flex-row  justify-center items-center gap-7 ">
   
    <div className="flex flex-col gap-3 items-center lg:items-start lg:flex-1">
    
      <div className="flex flex-col gap-2 text-center lg:text-left">
        <p className="  text-lg font-bold text-white">
        Pretending to be crypto brokers, these scammers offer fake services to their victims. They provide fake reports on crypto profits, convincing victims that their trading platforms are making money. These false reports trick victims into investing more and more. When victims try to withdraw their earnings, scammers charge various taxes or deny their request completely.
        </p>
        <p className="  text-lg font-bold text-white">
        Not everyone is comfortable with trading, as it involves many factors. Trading in cryptos can be even harder and needs a lot of time to understand the market. Crypto brokers offer their services to trade for clients and charge a commission on each trade.
        </p>
        <p className="  text-lg font-bold text-white">
        Scammers also offer to trade for their victims, but instead of looking out for their victims’ financial interests, these scammers trade recklessly.
        </p>
      </div>
     
    </div>
    <div className="mx-auto lg:flex-1 flex lg:justify-end">
      <img
        className="rounded "
        src="https://res.cloudinary.com/dtlejpoxq/image/upload/v1726409489/Bitcoin/WhatsApp-Scam_-Facebook-Scam_-Asset-Tracing_-And-Crypto-Scam-Recovery_qk7iag.webp"
        alt=""
      />
    </div>
  </div>
</div>
  )
}

export default CryptoOperatCard