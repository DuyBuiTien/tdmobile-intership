import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import ChiTietPhanAnhStyle from './Styles/ChiTietPhanAnhStyle'
import { ScrollView } from 'react-native-gesture-handler';

export default class ChiTietPhanAnh extends Component {

    static navigationOptions = {
        title: 'Chi tiết phản ánh',
        headerTitleStyle: {
        }
    };

    render() {
        return (
            <ScrollView
                contentContainerStyle={ChiTietPhanAnhStyle.scrollContainer}
                overScrollMode='always'
                keyboardDismissMode='on-drag'
            >
                <View
                    style={ChiTietPhanAnhStyle.container}
                >
                    <Text
                        style={ChiTietPhanAnhStyle.inlineHeader}
                    >
                        Vụ án cháy rừng nghiêm trọng tại Hà Tĩnh</Text>

                    <Text
                        style={ChiTietPhanAnhStyle.inlineText}
                    >Liên quan đến vụ cháy rừng nghiêm trọng kéo dài suốt gần 2 ngày vẫn chưa thể dập tắt tại Nghi Xuân, Hà Tĩnh, nghi phạm bước đầu khai nhận đã đốt rác gần bìa rừng khiến ngọn lửa bén vào rừng thông.
                </Text>

                    <Text
                        style={ChiTietPhanAnhStyle.inlineText}
                    >
                        Ông Phan Phi Phượng cũng cho biết, cơ quan chức năng đang tạm giữ nghi phạm P.V.T (SN 1973, trú tại xã Xuân Hồng, huyện Nghi Xuân) vì nghi liên quan đến vụ cháy rừng nghiêm trọng này.
    
    “Bước đầu nghi phạm khai nhận là hôm đó có đốt rác tại khu vườn gần bìa rừng nên có thể lửa đã bén vào rừng, gây ra vụ cháy”, ông Phan Phi Phượng cho biết,.
    
    Cũng theo ông Chủ tịch UBND xã Xuân Hồng, tại địa phương, nghi phạm P.V.T. là một người dân bình thường, không điều tiếng, chỉ nghe nói có hay uống rượu.
    
    Một lãnh đạo Công an huyện Nghi Xuân cũng cho biết, cơ quan công an đang tạm giữ nghi phạm P.V.T để tiếp tục làm rõ vụ việc.
    
    Trước đó, vào đầu giờ chiều ngày 28/6, do thời tiết nắng nóng kéo dài kèm theo gió Lào thổi mạnh đã khiến rừng thông thuộc tiểu khu 92A thôn 7, xã Xuân
                </Text>

                    <Image
                        style={ChiTietPhanAnhStyle.inlineImage}
                        source={{ uri: 'https://icdn.dantri.com.vn/thumb_w/640/2019/06/28/anh-3-1561737801900.jpg' }}
                    />

                    <Image
                        style={ChiTietPhanAnhStyle.inlineImage}
                        source={{ uri: 'https://icdn.dantri.com.vn/thumb_w/640/2019/06/29/anh-18-1561775406075.jpg' }}
                    ></Image>

                    <Text
                        style={ChiTietPhanAnhStyle.inlineText}
                    >Kết Quả Xử Lý</Text>

                    <Text
                        style={ChiTietPhanAnhStyle.inlineText}
                    >Bình Luận</Text>
                </View>
            </ScrollView>
            
        );
    }
}