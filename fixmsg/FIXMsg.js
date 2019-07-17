class FixProtocol {
  constructor() {
    this.dictionary = {
      BeginString:             8,
      BodyLength:              9,
      MsgType:                 35,
      SenderCompID:            49,
      TargetCompID:            56,
      MsgSeqNum:               34,
      PossDupFlag:             43,
      PossResend:              97,
      SendingTime:             52,
      OrigSendingTime:         122,
      TestReqID:               112,
      BeginSeqNo:              7,
      EndSeqNo:                16,
      RefSeqNum:               45,
      RefTagID:                371,
      RefMsgType:              372,
      SessionRejectReason:     373,
      Text:                    58,
      GapFillFlag:             123,
      NewSeqNo:                36,
      OrderID:                 37,
      SecondaryExecID:         527,
      ClOrdID:                 11,
      OrigClOrdID:             41,
      OrdStatusReqID:          790,
      ExecID:                  17,
      ExecType:                150,
      OrdStatus:               39,
      OrdRejReason:            103,
      Account:                 1,
      Side:                    54,
      OrdType:                 40,
      Price:                   44,
      StopPx:                  99,
      TimeInForce:             59,
      LastQty:                 32,
      LastPx:                  31,
      LeavesQty:               151,
      CumQty:                  14,
      AvgPx:                   6,
      TransactTime:            60,
      SettlDate:               64,
      CxlRejResponseTo:        434,
      CxlRejReason:            102,
      EncryptMethod:           98,
      HeartBtInt:              108,
      ResetSeqNumFlag:         141,
      MaxMessageSize:          383,
      Username:                553,
      Password:                554,
      ExecInst:                18,
      TradeRequestID:          568,
      TradeRequestType:        569,
      SubscriptionRequestType: 263,
      LastRptRequested:        912,
      TradeDate:               75,
      TotNumTradeReports:      748,
      TradeRequestResult:      749,
      TradeRequestStatus:      750,
      CheckSum:                10,
      SecurityID:              48,
      SecurityIDSource:        22,
      OrderQty:                38,
      NoDates:                 580,
      NoSides:                 552,
      MDEntryType:             269,
      MDReqID:                 262,
      MarketDepth:             264,
      MDUpdateType:            265,
      NoRelatedSym:            146,
      NoMDEntryTypes:          267,
      NoMDEntries:             268,
      MDEntryPx:               270,
      MDEntrySize:             271,
      MDEntryDate:             272,
      MDEntryTime:             273,
      Symbol:                  55
    },
    this.startOfHeaderDelimiter = "\xo1",
    this.emptyString = '',
    this.body = this.emptyString
  }

  encode(obj) {
    let message = ''

    for (let key in obj) {
      let data = []
      if (obj[key] === '[object Array]') {
        obj[key].forEach(item => {
          data.push(this.dictionary[key] + '=' + item)
        })
      }

      if (data.length !== null) {
        message += data.join(this.startOfHeaderDelimiter)
      } else {
        message += this.dictionary[key] + '=' + obj[key]
      }
    }

    message = message.replace('%1', this.bodyLength())
    message += this.dictionary.CheckSum + '=' + this.findSum(message, message.length) + this.startOfHeaderDelimiter

    return message
  }

  bodyLength() {
    return this.body.length
  }

  findSum(buffer, bufferLength) {
    for (let i = 0, j = 0; i < bufferLength; j += buffer[i++]) {}
    let sum = j % 256

    if (sum.toString().length) {
      sum = '00' + sum
      break
    } else {
      sum = '0' + sum
      break
    }

    return sum
  }

  parser(fixString) {
    let items = fixString.split(/\x01/)
    let newObj = {}
  }
}

const FIX = '8=FIX.4.2|9=51|35=0|34=703|49=ABC|52=20100130-10:53:40.830|56=XYZ|10=249|'
const msg = new FixProtocol(FIX)

