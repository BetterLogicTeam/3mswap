import React from "react";
import { AiFillStar } from "react-icons/ai";


function Front() {
    
  return (
    <div>
      <section>
			    <div class="container">
			        <div class="row">
			        	<div class="col-md-5 py_0 heading">
			        		 <div class="pools">
			                    {/* <!-- Nav pills --> */}
			                    
			                    {/* <!-- Tab panes --> */}
			                    <div class="tab-content">
			                        <div class="container py_0 tab-pane active">
			                            <div class="exchange_tab">
			                                <div class="exchange_wrap1 pt_5">
			                                    <div class="exchange_hd">
			                                        <ul class="nav nav-pills pool_tab" role="tablist">
								                        <li class="nav-item">
								                            <a class="nav-link active" href="index.html">Exchange Crypto</a>
								                        </li>
								                       
								                        
								                    </ul>
			                                    </div>
			                                    <div class="exchange_tools">
			                                    	<ul class="nav nav-pills pool_tab" role="tablist">
								                        
								                       
								                        <li class="nav-item">
								                            <a class="nav-link" href="liquidity.html">Buy Crypto</a>
								                        </li>
								                    </ul>
			                                        
			                                    </div>
			                                </div>
			                                <br />
			                                <h6>You Send</h6>
			                                <div class="exch_bg">

			                                    <div class="exchange_wrap" style={{padding: "8px 0px 17px 1px"}}>
			                                    	<div class="exchange_hd ex_font width_fluid">
			                                            <input type="text" class="input_set" placeholder="0.0" />
			                                        </div>
			                                        <div class="exchange_tools">

			                                            <div class="bnb_btn bnb_position">
			                                            	 <span class="swap_from">Swap From</span> 
			                                                <button onclick="openNav8()">
			                                                	<img src="bit.png"/>
			                                                	<span><b>BTC</b></span>
			                                                	<i class="fa fa-chevron-down"></i>
			                                                </button>
			                                            </div>
			                                        </div>
			                                        
			                                    </div>
			                                </div>
			                                <div class="exchange_arrow">
			                                    <h6>You Get</h6>
			                                    <div>
			                                    	<i class="fa fa-refresh" aria-hidden="true"></i>
			                                    </div>
			                                    
			                                </div>
			                                <div class="exch_bg mb-4">
			                                    
			                                    <div class="exchange_wrap" style={{padding: "8px 0px 17px 1px"}}>
			                                    	 <div class="exchange_hd ex_font width_fluid ">
			                                            <input type="number" class="input_set" placeholder="0.0" />
			                                        </div>
			                                    	 <div class="exchange_tools">

			                                            <div class="bnb_btn bnb_position">
			                                            	 <span class="swap_from">Swap From</span> 
			                                                <button onclick="openNav8()">
			                                                	<img src="eth.png"/>
			                                                	<span><b>ETH</b></span>
			                                                	<i class="fa fa-chevron-down"></i>
			                                                </button>
			                                            </div>
			                                        </div>
			                                       
			                                    </div>
			                                </div>
			                               
			                                <div class="wallet_btn mr_set">
			                                    <button class="btn button btn-success" onclick="openNav9()">VIEW OFFERS</button>
			                                </div>
			                            </div>
			                        </div>
			                          
			                    </div>
			                </div>
			            </div>
			            <div class="col-md-1"></div>
			            <div class="col-md-6  py_0 heading">
			            	
			            		<h1 class="heading_more">
			            			More than a crypto exchange
			            		</h1>
			            		<p class="more">
			            			We pick the best — you make a choice
			            		</p>
			            		<p>TrustScore 4.3 on <AiFillStar class="fa fa-star stars"></AiFillStar>Trustpilot
			            		<span class="span_fa"> 
			            			<AiFillStar></AiFillStar>
			            			<AiFillStar></AiFillStar>
                                    <AiFillStar></AiFillStar>
                                    <AiFillStar></AiFillStar>
			            		</span>
			            		</p>


                            
			               
			            </div>
			        </div>
			    </div>
			 </section>

             <div id="myNav8" class="overlay8 textcenter" style={{display: "none"}}>
        <div class="setting_close">
            <span class="tokenset font_normal">Select a token <i class="fa fa-question"></i></span>
            <span onclick="closeNav8()">×</span>
        </div>
        <div class="overlay8-content text-left">
            <div class="swapbg8">
                <div class="select_token">
                    <div class="select_input">
                        <input type="text" placeholder="Search name or paste address" class="eeRXNx"/>
                    </div>
                </div>
                <div class="">
                <div class="para">
                	<p>Common bases</p>

                </div> 
                <div class="eth"> 
                	<div class="eth_img">
                		<img src="assets/image/eth1.jpg"/> ETH
                	</div>
                	<div class="eth_img">
                		<img src="assets/image/sushi.jpg"/> SUSHI
                	</div>
                	<div class="eth_img">
                		<img src="assets/image/wbtr.jpg"/> WBTR
                	</div>
                	<div class="eth_img">
                		<img src="assets/image/mim.jpg"/>  MIM
                	</div>
                	<div class="eth_img">
                		<img src="assets/image/spell.webp"/>  SPELL
                	</div>


                 </div>

                 <div class="eth"> 
                	<div class="eth_img">
                		<img src="assets/image/ice.webp"/> ICE
                	</div>
                	<div class="eth_img">
                		<img src="assets/image/usdc.jpg"/> USDC
                	</div>
                	<div class="eth_img">
                		<img src="assets/image/usdt.jpg"/> USDT
                	</div>
                	<div class="eth_img">
                		<img src="assets/image/dai.png"/>  DAI
                	</div>
                	<div class="eth_img">
                		<img src="assets/image/frax.webp"/>  FRAX
                	</div>


                 </div>


                 <div class="chose_token"> 

                <div class="token_name">Token Name</div>
                <div class="token_arrow"> <img src="assets/image/arrow_down.png"/> </div> </div> <div class="all_token scroll_track">
                    {/* <!----token list 1----> */}
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/bnb.png"/> &nbsp;&nbsp;BNB</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    {/* <!----token list 2----> */}
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/ADA.png"/> &nbsp;&nbsp;ADA</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    {/* <!----token list 3----> */}
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/ALPHA.png"/> &nbsp;&nbsp;ALPHA</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    {/* <!----token list 4----> */}
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/ANKR.png"/> &nbsp;&nbsp;ANKR</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    {/* <!----token list 5----> */}
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/ATM.png"/> &nbsp;&nbsp;ATM</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    {/* <!----token list 6----> */}
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/ATOM.png"/> &nbsp;&nbsp;ATOM</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    {/* <!----token list 7----> */}
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/BAKE.png"/> &nbsp;&nbsp;BAKE</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    {/* <!----token list 8----> */}
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/bLBT.png"/> &nbsp;&nbsp;bLBT</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    {/* <!----token list 9----> */}
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/usdt.png"/>&nbsp;&nbsp; USDT</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    {/* <!----token list 10----> */}
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/wbnb.png"/>&nbsp;&nbsp; WBNB</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/1inch.webp"/> &nbsp;&nbsp;1INCH</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/aave.jpg"/> &nbsp;&nbsp;AAVE</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>

                     <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/adx.webp"/> &nbsp;&nbsp;ADX</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>

                     <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/aer.webp"/> &nbsp;&nbsp;AERGO</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>

                     <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/aethc.webp"/> &nbsp;&nbsp;aETHc</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                     <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/ageur.webp"/> &nbsp;&nbsp;agEUR</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                     <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/agld.webp"/> &nbsp;&nbsp;AGLD</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/akro.webp"/> &nbsp;&nbsp;AKRO</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/alcx.webp"/> &nbsp;&nbsp;ALCX</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                     <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/aleph.webp"/> &nbsp;&nbsp;ALEPH</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/alpa.webp"/> &nbsp;&nbsp;ALPA</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                     <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/alpaca.webp"/> &nbsp;&nbsp;ALPACA</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/alpha.webp"/> &nbsp;&nbsp;ALPHA</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/alusd.webp"/> &nbsp;&nbsp;alUSD</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                     <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/amp.jpg"/> &nbsp;&nbsp;AMP</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                     <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/ampl.webp"/> &nbsp;&nbsp;AMPL</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>

                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/angle.webp"/> &nbsp;&nbsp;ANGLE</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                     <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/ankr.webp"/> &nbsp;&nbsp;ANKR</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/ant.jpg"/> &nbsp;&nbsp;ANT</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/ant.jpg"/> &nbsp;&nbsp;ANT</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>

                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/apl3.webp"/> &nbsp;&nbsp;API3</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>

                     <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/apw.webp"/> &nbsp;&nbsp;APW</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>

                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/arch.webp"/> &nbsp;&nbsp;ARCH</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>

                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/arcx.webp"/> &nbsp;&nbsp;ARCX</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                     <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/armor.webp"/> &nbsp;&nbsp;ARMOR</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/arnxm.jpg"/> &nbsp;&nbsp;ARNXM</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>

                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/asg.webp"/> &nbsp;&nbsp;ASG</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>

                     <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/assy.webp"/> &nbsp;&nbsp;ASSY</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/attr.webp"/> &nbsp;&nbsp;ATTR</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/auction.webp"/> &nbsp;&nbsp;AUCTION</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>

                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/audio.webp"/> &nbsp;&nbsp;AUDIO</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>

                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/avastr.webp"/> &nbsp;&nbsp;AVASTR</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>

                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/axs.webp"/> &nbsp;&nbsp;AXS</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>

                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/axs.webp"/> &nbsp;&nbsp;AXS</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>

                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/bab.webp"/> &nbsp;&nbsp;BAB</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/bac.webp"/> &nbsp;&nbsp;BAC</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>

                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/badger.webp"/> &nbsp;&nbsp;BADGER</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>

                     <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/bakc.webp"/> &nbsp;&nbsp;BAKC</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>

                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/bal.webp"/> &nbsp;&nbsp;BAL</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>

                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/bal.webp"/> &nbsp;&nbsp;BAL</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>

                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/banana.webp"/> &nbsp;&nbsp;BANANA</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>

                     <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/band.webp"/> &nbsp;&nbsp;BAND</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>

                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/bank.webp"/> &nbsp;&nbsp;BANk</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                     <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/base.webp"/> &nbsp;&nbsp;BASE</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/bask.webp"/> &nbsp;&nbsp;BASK</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/bcp.webp"/> &nbsp;&nbsp;BCP</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/bdi.webp"/> &nbsp;&nbsp;BDI</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                     <div class="token_list">
                        <div class="token_icon">
                            <h2><img src="assets/image/bfc.webp"/> &nbsp;&nbsp;BFC</h2>
                        </div>
                        <div class="token_list"></div>
                    </div>
                    
                    


                </div>
            </div>
        </div>
    </div>
    {/* <script>
        function openNav8() {
            document.getElementById("myNav8").style.display = "block";
        }

        function closeNav8() {
            document.getElementById("myNav8").style.display = "none";
        }
    </script>

   	<script>
        $(function () {
            $("#datepicker").datepicker();
        });
    </script>
    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({ pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
        }
    </script>
<script>
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
</script> */}

</div>
    </div>
  );
}

export default Front;
