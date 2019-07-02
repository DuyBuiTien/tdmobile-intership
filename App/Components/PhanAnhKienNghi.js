import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import { ButtonGroup, Button, Icon } from 'react-native-elements';
import PAKNStyle from './Styles/PAKNStyle'
import TaoPhanAnh from './TaoPhanAnh'

class FlatListItem extends Component{
    render(){
        return(
            <View>
                <Text></Text>
            </View>
        );
    }
}

export default class PhanAnhKienNghi extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }

    static navigationOptions = {
        title: 'Phản Ánh Kiến Nghị',
        headerRight: (
        <Button
            containerStyle={PAKNStyle.containerHeaderButton}
            type="clear"
            icon={
            <Icon
                name='add'
                type='material-icons'
                onPress={()=>{this.props.navigation.navigate('TaoPhanAnh')}}
            />}
        />)
    };

    render(){
        const buttons = ['Tất cả', 'Mới nhất', 'Phổ biến']
        return(
            <View
                style={PAKNStyle.container}
            >
                <ButtonGroup
                    containerStyle={PAKNStyle.containerButtonGroup}
                    onPress={this.updateIndex}
                    selectedIndex={this.state.selectedIndex}
                    buttons={buttons}
                />
                <View>
                    <FlatList
                        renderItem={(item, index)=> {
                            
                        }}
                    >

                    </FlatList>
                </View>
            </View>
        );
    }
}