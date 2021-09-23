import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

function Story(props) {
  return (
    <View>
      <Image
        source={{
          uri: props.image,
        }}
        style={styles.storyImage}
      />
      <Text style={styles.storyTitle}>{props.title}</Text>
    </View>
  );
}

function PropsDinamis() {
  return (
    <View>
      <Text style={styles.mainTitle}>
        Latihan Komponen Dinamis Dengan Props
      </Text>
      <ScrollView horizontal>
        <View style={styles.propDinamis}>
          <Story
            title={'XXI Reels'}
            image={
              'https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/s150x150/202642008_878516586102129_1317843370919664846_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=109&_nc_ohc=sAZgijU1G_UAX_ZbUHh&edm=AGW0Xe4BAAAA&ccb=7-4&oh=d5c605d128b4b31f9b56d4bbbf9e5aca&oe=614A0814&_nc_sid=acd11b'
            }
          />
          <Story
            title={'Now Showing'}
            image={
              'https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/s150x150/217210284_356208256066661_5470466110900038238_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=105&_nc_ohc=WWTYnl1nRsgAX9xqulO&edm=AGW0Xe4BAAAA&ccb=7-4&oh=b86b25b43ab5d93878e7c6da01ad27e9&oe=614A3FC0&_nc_sid=acd11b'
            }
          />
          <Story
            title={'Quiz'}
            image={
              'https://scontent-sin6-3.cdninstagram.com/v/t51.2885-15/s150x150/218224813_123855756581778_4169756302290416017_n.jpg?_nc_ht=scontent-sin6-3.cdninstagram.com&_nc_cat=106&_nc_ohc=vDEalBfn8gwAX9NPh4H&edm=AGW0Xe4BAAAA&ccb=7-4&oh=9b919a136f7678b0c475fa2fe5d72ad0&oe=61493C56&_nc_sid=acd11b'
            }
          />
          <Story
            title={'Promo Asik'}
            image={
              'https://scontent-sin6-4.cdninstagram.com/v/t51.2885-15/s150x150/217857257_341594927437297_2423599727214212664_n.jpg?_nc_ht=scontent-sin6-4.cdninstagram.com&_nc_cat=101&_nc_ohc=vOL09Xln41IAX9c34Za&tn=hVmzlATlxuLUVBcv&edm=AGW0Xe4BAAAA&ccb=7-4&oh=8f270074cc6cb198893d85d0f6122222&oe=6149D459&_nc_sid=acd11b'
            }
          />
          <Story
            title={'XXI Cafe'}
            image={
              'https://scontent-sin6-4.cdninstagram.com/v/t51.2885-15/s150x150/217962120_530735811410377_1828809303371318353_n.jpg?_nc_ht=scontent-sin6-4.cdninstagram.com&_nc_cat=101&_nc_ohc=m9dJQ7h3ZsoAX9fV4dU&edm=AGW0Xe4BAAAA&ccb=7-4&oh=f59264fe1a96b4bf9990dce8200d2298&oe=6149C1FF&_nc_sid=acd11b'
            }
          />
          <Story
            title={'M-TIX'}
            image={
              'https://scontent-sin6-2.cdninstagram.com/v/t51.2885-15/s150x150/217683348_806582603329814_3564154245635899494_n.jpg?_nc_ht=scontent-sin6-2.cdninstagram.com&_nc_cat=102&_nc_ohc=jpmhMIhk7qYAX9ZAnWs&edm=AGW0Xe4BAAAA&ccb=7-4&oh=445ceef45417cdcd6a446ecc871b5f35&oe=614A4C3F&_nc_sid=acd11b'
            }
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 16,
  },
  propDinamis: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    marginEnd: 16,
  },
  storyTitle: {
    textAlign: 'center',
    maxWidth: 70,
    marginTop: 4,
  },
});

export default PropsDinamis;
