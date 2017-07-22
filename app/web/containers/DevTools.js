/**
 * Author: gaopeng
 * Date：  2017/7/8
 * Time:   17:50
 */
import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export default createDevTools(
  <DockMonitor toggleVisibilityKey="H" changePositionKey="W">
    <LogMonitor />
  </DockMonitor>
);
