import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper'
import banner1 from '../../../assets/bann1.jpeg'
import banner2 from '../../../assets/banner2.jpg'
import banner3 from '../../../assets/banner3.jpg'
import jindouBanner from '../../../assets/jindou-banner.gif'
class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            bannerList: [
                {
                    image: banner1
                }, {
                    image: banner2
                }, {
                    image: banner3
                },
            ],
            welfareList: [
                {
                    image: require('../../../assets/fuli1.png')
                },{
                    image: require('../../../assets/fuli2.png')
                },{
                    image: require('../../../assets/fuli3.png')
                },
            ]
        }
    }
    componentWillMount() {
        const domin = 'https://mall-activity-test.henshihui.com'
        // fetch(`${domin}/miniProgram/mini-program/get-index-data`)
        //     .then(res => res.json()).then(res=>{
        //         const {return_msg} = res
        //         this.setState({
        //             bannerList: return_msg.bannerList
        //         })
        //     console.log(return_msg);
        // })
    }
    Title(props) {
        return (

            <View style={{
                height: 40,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 16,
                paddingRight: 16,
                alignItems: 'center'
            }}>
                <View>
                    <Text style={{
                        color: '#333',
                        fontSize: 20,
                    }}>
                        {props.title}
                    </Text>
                    <View style={styles.border} />
                </View>
                <Text style={{
                    color: '#333',
                    fontSize: 14,
                }}>
                    换一批
                </Text>
            </View>
        )
    }

    render() {
        const {bannerList, welfareList} = this.state;
        const {Title} = this
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.swiper_container}>
                        <Swiper style={styles.wrapper} showsButtons={false}>
                            {
                                bannerList.map((v, i) => <View key={i} style={styles.slide}>
                                    <Image source={v.image} style={{width: '100%', height: '100%'}} />
                                </View>)
                            }
                        </Swiper>
                    </View>
                    <View style={styles.banner_container}>
                        <Swiper style={styles.wrapper} showsButtons={false}>
                            {
                                bannerList.map((v, i) => <View key={i} style={styles.slide}>
                                    <Image source={jindouBanner} style={{width: '100%', height: '100%'}} />
                                </View>)
                            }
                        </Swiper>
                    </View>
                    {/*    新人福利*/}
                    <View style={{...styles.white, marginTop: 8, paddingBottom: 22}}>
                        <Title title={'新人福利'} />
                        {/*    福利content*/}
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 10,
                        }}
                        >
                            {
                                welfareList.map((v, i) =>
                                    <View style={{flex: 1,
                                        alignItems: 'center'
                                    }} key={i}>
                                        <Image style={{width: 100, height: 100, marginTop: 5, marginBottom: 5}} source={v.image}/>
                                        <Text style={{fontSize: 12,lineHeight: 20, color: '#333'}}>腾讯视频7天会员</Text>
                                        <Text style={{fontSize: 12, color: '#ccc'}}>120元</Text>
                                        <View style={{
                                            backgroundColor: '#FF3355',
                                            justifyContent:'center',
                                            marginTop: 5,
                                            borderRadius: 12,
                                            alignItems:'center', width: 89, height: 24,}}>
                                            <Text style={{fontSize: 12, color: '#fff'}}>已经领取</Text>
                                        </View>
                                    </View>
                                )
                            }
                        </View>
                    </View>
                    {/*    商品列表*/}
                    <View style={{...styles.white, marginTop: 8}}>
                        <Title title={'生活小能手'}></Title>
                        <View style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                        }}>
                            <View style={{marginLeft: 16, width: 163.5, height: 300, backgroundColor: 'red'}}>
                                
                            </View>
                            <View style={{marginLeft: 16, width: 163.5, height: 300, backgroundColor: 'red'}}>

                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafafa'
    },
    swiper_container: {
        width: 375,
        height: 170
    },
    banner_container: {
        width: 375,
        height: 100
    },
    wrapper: {

    },
    slide:{

    },
    white: {
        backgroundColor: '#fff'
    },
    border: {
        width: 16,
        height: 2,
        bottom: -7,
        backgroundColor: 'red'
    }
});

export default Home
