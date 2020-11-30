<!--
 * @Author: ShenLing
 * @Date: 2020-11-24 17:51:57
 * @LastEditors: ShenLing
 * @LastEditTime: 2020-11-30 14:01:36
-->
### REACT-CRON-GENERATOR

> PROJECT DESCRIPTION
> 1. using Create-React-App to create this project
> 2. this project is for personal practice 

### open-source UI library
- [Alibaba Fusion Online Document](https://fusion.design/pc/component/doc/102)
- [Alibaba Fusion Github](https://github.com/alibaba-fusion/next?spm=fusion-design.component-design-fusion.0.0.272238035PO0Pw)
  
### Usage
- Start the project `yarn start`
- Build the project `yarn build`
- Install the dependencies `yarn` or `yarn add <--package-name-->` or `npm install`
- Component Document:
```js
import CronGenerator from '@/components/CronGenerator'
export default class App extends React.Component {
  state = {
    cronGeneratorVisible: false,
    cronString: '* * * ? * * *'
  }

  onClose = () => {
    this.setState({ cronGeneratorVisible: false })
  }
  
  onConfirm = (val) => {
    this.setState({ cronString: val})
  }

  render () {
	return (
	  <div className="cronGeneratorApp">
          <p>CRON Generator Sample:</p>
          <div className="cron_input">
            <Input value={cronString} />
            <Button type="primary" onClick={() => { this.setState({ cronGeneratorVisible: true }) }}>CRON</Button>
          </div>

          <CronGenerator
            isPreview
            initCron={cronString}
            dialogVisible={cronGeneratorVisible}
            onClose={this.onClose}
            onConfirm={this.onConfirm}
          />
        </div>
	)
  }
}
```
| 参数名称      | 参数描述                           | 参数类型   | 默认值  | 备注                                           |
| -----------   | ---------------------------------- | ---------- | -------| ---------------------------------------------- |
| isPreview     | 是否开启预览模式                   | Boolean     | false  | 该模式下，将不会显示新增取消按钮                                             |
| initCron      | 需传入解析到UI界面的CRON字符串     | String      | -      | -                                             |
| dialogVisible | CRON对话框显示                     | Boolean     | false  | -                                             |
| onClose       | 关闭对话框对应方法，且取消获取CRON  | Function   | -      | -                                             |
| onConfirm     | 关闭对话框且获取到最新的CRON表达式  | Function   |  -     | 该方法中会传入一个参数val，代表生成的cron表达式|


### LICENSE: MIT
