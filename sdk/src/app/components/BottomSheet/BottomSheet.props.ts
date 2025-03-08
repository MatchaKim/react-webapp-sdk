import React from 'react';

export interface BottomSheetProps {
  visible?: boolean;
  header?: string;
  contentString?: string;
  onCloseText?: string;
}