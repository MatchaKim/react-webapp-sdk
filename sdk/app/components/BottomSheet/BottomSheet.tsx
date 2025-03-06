import React from 'react';
import { View, Text, SafeAreaView, Modal, Pressable } from 'react-native';
import { BottomSheetProps } from './BottomSheet.props';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './BottomSheet.store';
import { hideBottomSheet } from './BottomSheet.slice';
const BottomSheet:React.FC<BottomSheetProps> = ({ onCloseText="닫기" }: BottomSheetProps) => {
  const dispatch = useDispatch();
  const { visible,header,contentString } = useSelector((state: RootState) => state.bottomSheet);

  return (
    <Modal
        transparent={true}
        animationType="none"
        visible={visible}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ borderTopRightRadius: 12, borderTopLeftRadius: 12, backgroundColor: 'white', alignItems: 'center', paddingHorizontal: 12, paddingBottom: 8 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#222222', textAlign: 'center' }}>{header}</Text>
                        {(contentString && contentString.length > 0) &&
                        <Text style={{ fontSize: 16, color: '#707070', textAlign: 'center', fontWeight: '400', lineHeight: 24, marginTop: 8, marginBottom: 32 }}>
                            {contentString}
                        </Text>}
                        <Pressable style={{ backgroundColor: '#E6EDFF', borderRadius: 4, width: '100%', alignItems: 'center', justifyContent: 'center', height: 51 }} onPress={() => dispatch(hideBottomSheet())}>
                            <Text style={{ color: '#0033CC', fontSize: 16, fontWeight: 600 }}>{onCloseText}</Text>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
  );
};

export default BottomSheet;