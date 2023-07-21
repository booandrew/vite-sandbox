import TranslateIcon from './assets/icons/voice.svg';
import VoiceoverIcon from './assets/icons/voice.svg';
import VoiceCloningIcon from './assets/icons/voice-clone.svg';
import GridIcon from './assets/icons/grid.svg';
import StarsExtraIcon from './assets/icons/stars-extra.svg';
import EditIcon from './assets/icons/edit.svg';
import FileIcon from './assets/icons/file.svg';
import CheckMarkIcon from './assets/icons/check-mark.svg';
import TextInputIcon from './assets/icons/check-mark.svg';

export const PlanCategory = {
  basic: `basic`,
  pro: `pro`,
  business: `business`,
  enterprise: `enterprise`,
};

export const PlanFeatureIconKey = {
  voice: `voice`,
  translate: `translate`,
  grid: `grid`,
  textInput: `textInput`,
  starsExtra: `starsExtra`,
  voiceCloning: `voiceCloning`,
  edit: `edit`,
  file: `file`,
  checkMark: `checkMark`,
};

export const PLAN_FEATURE_ICONS = {
  [PlanFeatureIconKey.voice]: <img src={VoiceoverIcon}></img>,
  [PlanFeatureIconKey.translate]: <img src={TranslateIcon}></img>,
  [PlanFeatureIconKey.textInput]: <img src={TextInputIcon}></img>,
  [PlanFeatureIconKey.grid]: <img src={GridIcon}></img>,
  [PlanFeatureIconKey.starsExtra]: <img src={StarsExtraIcon}></img>,
  [PlanFeatureIconKey.voiceCloning]: <img src={VoiceCloningIcon}></img>,
  [PlanFeatureIconKey.edit]: <img src={EditIcon}></img>,
  [PlanFeatureIconKey.file]: <img src={FileIcon}></img>,
  [PlanFeatureIconKey.checkMark]: <img src={CheckMarkIcon}></img>,
};
