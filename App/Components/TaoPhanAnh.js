import React, {Component} from 'react';
import {TextInput, Text, View} from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';
import TaoPhanAnhStyle from './Styles/TaoPhanAnhStyle'
import { ScrollView } from 'react-native-gesture-handler';

export default class TaoPhanAnh extends Component{

    static navigationOptions = {
        title: 'Tạo Phản Ánh',
        headerTitleStyle: {
        }
    };

    state = {
        securityChecked: false,
        environmentalChecked: false,
        foodSafetyChecked: false,
        otherChecked: false
    };

    render(){
        return(
            <ScrollView
                style={TaoPhanAnhStyle.scrollContainer}
            >
                <View
                    style={TaoPhanAnhStyle.container}
                >
                    <Text
                        style={TaoPhanAnhStyle.inlineText}
                    >Tiêu đề</Text>

                    <TextInput
                        style={TaoPhanAnhStyle.inlineTextInput}
                        placeholder='Nhập vào tiêu đề'
                    />

                    <Text
                        style={TaoPhanAnhStyle.inlineText}
                    >Nội dung</Text>

                    <TextInput
                        style={TaoPhanAnhStyle.inlineTextInput}
                        placeholder='Nhập vào nội dung'
                        multiline={true}
                        numberOfLines={3}
                    />

                    <Text
                        style={TaoPhanAnhStyle.inlineText}
                    >Chuyên mục</Text>

                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox
                                checked={this.state.securityChecked}
                                onPress={() => this.setState({ securityChecked: !this.state.securityChecked })}
                            />
                            <Text style={{ color: 'black' }}> An ninh - Trật tự</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox
                                checked={this.state.environmentalChecked}
                                onPress={() => this.setState({ environmentalChecked: !this.state.environmentalChecked })}
                            />
                            <Text style={{ color: 'black' }}> Vệ sinh môi trường</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox
                                checked={this.state.foodSafetyChecked}
                                onPress={() => this.setState({ foodSafetyChecked: !this.state.foodSafetyChecked })}
                            />
                            <Text style={{ color: 'black' }}> An toàn thực phẩm</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox
                                checked={this.state.otherChecked}
                                onPress={() => this.setState({ otherChecked: !this.state.otherChecked })}
                            />
                            <Text style={{ color: 'black' }}> Khác</Text>
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row' }}>
                        <Icon
                            containerStyle={TaoPhanAnhStyle.inlineIcon}
                            name='image'
                            type='font-awesome'
                            color='#f50'
                        />
                        <Text
                            style={TaoPhanAnhStyle.inlineText}
                        >Thêm hình ảnh phản ánh</Text>
                    </View>
                    
                    
                </View>
            </ScrollView>
        );
    }
}