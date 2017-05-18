/**
 * Created by Kevin on 16/3/9.
 */
import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import styles from './styles';

import PDFView from 'react-native-pdf-view';
import RNFS from 'react-native-fs';
import { connect } from 'react-redux';

class ScoreboardDetails extends React.Component {
  state = {
    isPdfDownload: false,
  };

  constructor(props) {
    super(props);
    this.pdfView = null;
    this.pdfPath = RNFS.DocumentDirectoryPath + this.props.filename
    console.log(this.props.filename);
    console.log(this.props.source);
  }

  componentDidMount() {
    const options = {
      fromUrl: this.props.source,
      toFile: this.pdfPath
    };
    RNFS.downloadFile(options).promise.then(res => {
      this.setState({isPdfDownload: true});
    }).catch(err => {
      console.log(err);
    });
  }

  zoom(val = 2.1) {
    this.pdfView && setTimeout(() => {
      if(this.pdfView)
        this.pdfView.setNativeProps({zoom: val});
    }, 3000);
  }

  render() {
    if (!this.state.isPdfDownload) {
      return (
        <View style={styles.downloadContainer}>
          <Text>Downloading</Text>
        </View>
      );
    }
    return (
      <PDFView ref={(pdf)=>{this.pdfView = pdf;}}
               key="sop"
               path={this.pdfPath}
               onLoadComplete={(pageCount)=>{
                        console.log(`total page count: ${pageCount}`);
                        this.zoom();
                     }}
               style={styles.pdf}/>
    )
  }
}
const mapStateToProps = state => ({
  source: ['http://188.166.222.158:8080/scoreboard', state.noodleDetails.data.file.filename].join('/'),
  filename: state.noodleDetails.data.file.filename
});
export default connect(mapStateToProps)(ScoreboardDetails);
