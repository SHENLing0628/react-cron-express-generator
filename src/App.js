/*
 * @Author: ShenLing
 * @Date: 2020-11-16 15:03:40
 * @LastEditors: ShenLing
 * @LastEditTime: 2020-11-24 18:04:15
 */
import './App.scss';
import React from 'react'
import { Button, Input } from '@alifd/next'

import CronGenerator from './components/CronGenerator'

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

  render() {
    const { cronGeneratorVisible, cronString } = this.state

    return (
      <div className="App">

        {/* cron生成器 */}
        <div className="cronGeneratorApp">
          <p>CRON Generator Sample:</p>
          <div className="cron_input">
            <Input value={cronString} />
            <Button type="primary" onClick={() => { this.setState({ cronGeneratorVisible: true }) }}>CRON</Button>
          </div>
          <CronGenerator
            // isPreview
            initCron={cronString}
            dialogVisible={cronGeneratorVisible}
            onClose={this.onClose}
            onConfirm={this.onConfirm}
          />
        </div>
      </div>
    )
  }
}
