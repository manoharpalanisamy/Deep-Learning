(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"+tyo":function(module,exports,e){var t=e("oKlG"),n=t.default?t.default:{},a,r=(0,e("HdzH").default)(n);r.getLocale=function(){return"en"},module.exports=r},"2jzc":function(module,e,t){"use strict";t.d(e,"a",function(){return s}),t.d(e,"f",function(){return o}),t.d(e,"d",function(){return d}),t.d(e,"c",function(){return f}),t.d(e,"b",function(){return v}),t.d(e,"e",function(){return S});var n=t("MVZn"),a=t.n(n),r=t("+tyo"),i=t.n(r),s;!function(e){e.Beginner="Beginner",e.Intermediate="Intermediate",e.Advanced="Advanced"}(s||(s={}));var o={Beginner:30,Intermediate:70,Advanced:100},u={Beginner:"#FFC500",Intermediate:"#3BAFDA",Advanced:"#33C68A"},c={Beginner:"#DBA900",Intermediate:"#258FB6",Advanced:"#006F43"},l=function getSkillPrimaryColor(e){return u[e]},m=function getSkillSecondaryColor(e){return c[e]},d=function getSkillLevel(e){return e<o.Beginner?s.Beginner:e<o.Intermediate?s.Intermediate:e<=o.Advanced?s.Advanced:s.Beginner},f=function getImprovingSkills(e){return e&&e.filter(function(e){return e&&e.isPredicted})},v=function getFormattedImprovingSkillNames(e){if(!e)return"";var t=e.reduce(function(e,t){var n=t&&t.competency&&t.competency.name;return e.push(n),e},[]),n;return t.reduce(function(e,n,a){var r=e;if(1===t.length)return n;return a===t.length-1?r+="and ".concat(n):t.length>2?r+="".concat(n,", "):r+="".concat(n," "),r},"")},p=function getSkillCompetencyHistories(e){return e.reduce(function(e,t){if(null===t)return e;var n=t.id,r=t.scores,i={};return i[n]=r,a()({},e,i)},{})},b=function getSkillCompetencyNextSteps(e){return e.reduce(function(e,t){if(null===t)return e;var n=t.id,r=t.steps,i={};return i[n]=r,a()({},e,i)},{})},S=function getTranslatedSkillLevel(e){var t;return{Beginner:i()("Beginner"),Intermediate:i()("Intermediate"),Advanced:i()("Advanced")}[e]}},"3Gfs":function(module,e,t){"use strict";var n=t("KMW/");e.a=function(){return n.a.get("Flex","skillsProfileEnabled")}},"4oCI":function(module,exports,e){var t=e("MqB1"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},A9kd:function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("TOZ3"),i=t("m10x"),s=t("2jzc"),o=t("iY+7"),u=t("flPG"),c=t.n(u),l=function SkillScore(e){var t=e.name,n=e.readableScore,u=e.showName,c=void 0!==u&&u,l=e.children,m=Object(s.d)(n);return a.a.createElement(r.b,{rootClassName:"rc-SkillScore",flexDirection:"column",alignItems:"center",justifyContent:"center"},c&&a.a.createElement("div",null,t),a.a.createElement(i.b,null,n),a.a.createElement(i.g,{rootClassName:"level m-b-1"},Object(s.e)(m)),l&&a.a.cloneElement(l,{}),a.a.createElement(o.a,{readableScore:n,skillLevel:m}))};e.a=l},L2S7:function(module,e,t){"use strict";var n=t("VkAN"),a=t.n(n),r=t("sbe7"),i=t.n(r),s=t("lTCR"),o=t.n(s),u=t("oJmH"),c=t.n(u),l=t("TOZ3"),m=t("BxDD"),d=t("CsdX"),f=t("Q9IO"),v=t("9A5E"),p=t("sQ/U"),b=t("PDuk"),S=t.n(b),g=t("2jzc"),I=t("A9kd"),y=t("kvW3"),E=t("+tyo"),D=t.n(E),h=t("4oCI"),k=t.n(h);function _templateObject(){var e=a()(["\n  query SkillsPostAssessmentQuery($userId: String!, $courseItemId: String!) {\n    SimpleCompetencyScoresV1 @naptime {\n      byUserAndCourseItemId(userId: $userId, courseItemId: $courseItemId) {\n        elements {\n          id\n          readableScore\n          competency {\n            id\n            name\n          }\n          lastAttemptAt\n          isPredicted\n        }\n      }\n    }\n  }\n"]);return _templateObject=function _templateObject(){return e},e}var C=o()(_templateObject()),A=function SkillsPostAssessmentNotification(e){var t=e.courseId,n=e.itemId,a=e.onDismiss;return i.a.createElement(u.Query,{query:C,variables:{userId:p.a.get().id.toString(),courseItemId:Object(b.tupleToStringKey)([t,n])}},function(e){var t=e.data;if(t&&t.SimpleCompetencyScoresV1&&t.SimpleCompetencyScoresV1.byUserAndCourseItemId&&t.SimpleCompetencyScoresV1.byUserAndCourseItemId.elements){var n=t.SimpleCompetencyScoresV1.byUserAndCourseItemId.elements,r=Object(g.c)(n);if(0===r.length)return null;var s=Object(g.b)(r),o=p.a.get().external_id;return i.a.createElement(l.b,{rootClassName:"rc-SkillsPostAssessmentNotification"},i.a.createElement(l.b,{rootClassName:"close-button",justifyContent:"between"},i.a.createElement(m.a,{type:"icon",size:"zero",svgElement:i.a.createElement(f.a,{size:18,color:d.b.bgGrayThemeMid}),onClick:a})),i.a.createElement(l.b,{flexDirection:"column"},i.a.createElement("strong",null,i.a.createElement(y.b,{message:D()("Your skill {skillsCount, plural, =1 {score is} other {scores are}} improving!"),skillsCount:r.length})),i.a.createElement(l.b,null,i.a.createElement(y.b,{message:D()("You've made progress in {skillNames}."),skillNames:s})," ",i.a.createElement(v.a,{trackingName:"view_skill_progress",target:"_blank nooppener noreferrer",href:"/user/".concat(o)},D()("View Skill Tracking."))),i.a.createElement(l.b,{rootClassName:"improving-skills"},r.map(function(e){var t=e.competency,n=e.lastAttemptAt,a=e.readableScore;return i.a.createElement(l.b,{rootClassName:"improving-skill",flexDirection:"column"},i.a.createElement(l.b,{rootClassName:"title",justifyContent:"between"},i.a.createElement("span",{className:"name"},t.name),i.a.createElement("span",{className:"new-score"},D()("New Score"))),i.a.createElement(I.a,{name:t.name,readableScore:a,lastAttemptAt:n}))}))))}return null})};e.a=A},MqB1:function(module,exports,e){},PqAn:function(module,exports,e){},QTif:function(module,exports,e){var t=e("PqAn"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},UUa2:function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("w/1P"),i=t.n(r),s=t("6gRZ"),o=t.n(s),u=t("TOZ3"),c=t("+tyo"),l=t.n(c),m=t("QTif"),d=t.n(m),f=function SkillLevelProgressIndicator(e){var t=e.scoreSkillLevel,n=e.skillLevel,r=e.left,o=e.readableScore,c=t===n,m=a.a.createElement("div",{className:i()({indicator:c}),style:{left:"calc(".concat(r,"% - 5px)")}}),d=a.a.createElement(s.Tooltip,{className:"skill-score-tooltip"},a.a.createElement(u.b,{flexDirection:"column"},a.a.createElement("span",{className:"score"},o),a.a.createElement("span",{className:"description"},l()("Your Score")))),f=a.a.createElement(s.OverlayTrigger,{placement:"top",overlay:d},m),v=c?f:m;return a.a.createElement("div",{className:"rc-SkillLevelProgressIndicator"},v)};e.a=f},"aBK/":function(module,e,t){"use strict";t.d(e,"a",function(){return f});var n=t("VkAN"),a=t.n(n),r=t("sbe7"),i=t.n(r),s=t("lTCR"),o=t.n(s),u=t("oJmH"),c=t.n(u),l=t("TUhR");function _templateObject2(){var e=a()(['\n  query QuizDataQuery(\n    $sessionId: String!\n    $questionDataArgs: String!\n    $responseDataArgs: String!\n    $skipFetchingResponses: Boolean!\n  ) {\n    quizQuestionData(sessionId: $sessionId, questionDataArgs: $questionDataArgs)\n      @rest(\n        type: "QuizQuestionData"\n        path: "onDemandExamSessions.v1/{args.sessionId}/actions"\n        method: "POST"\n        bodyKey: "questionDataArgs"\n      ) {\n      elements @type(name: "RestQuizQuestionDataElement") {\n        id\n        result @type(name: "RestQuizQuestionDataElementResult") {\n          questions\n          nextSubmissionDraftId\n          evaluation\n          responses(sessionId: $sessionId, responseDataArgs: $responseDataArgs)\n            @skip(if: $skipFetchingResponses)\n            @rest(\n              type: "QuizResponseData"\n              path: "onDemandExamSessions.v1/{args.sessionId}/actions"\n              method: "POST"\n              bodyKey: "responseDataArgs"\n            ) {\n            elements @type(name: "RestQuizResponseDataElement") {\n              id\n              result\n            }\n          }\n        }\n      }\n    }\n  }\n']);return _templateObject2=function _templateObject2(){return e},e}function _templateObject(){var e=a()(['\n  query QuizSessionMetaDataQuery($body: String!) {\n    quizSessionMetaData(body: $body)\n      @rest(type: "RestQuizSessionMetadata", path: "onDemandExamSessions.v1", method: "POST", bodyKey: "body") {\n      elements @type(name: "RestQuizSessionMetadataElement") {\n        id\n      }\n    }\n  }\n']);return _templateObject=function _templateObject(){return e},e}var m=o()(_templateObject()),d=o()(_templateObject2()),f=function QuizData(e){var t=e.courseId,n=e.itemId,a=e.examSessionId,r=e.children,s=e.onQuizSessionQueryCompleted,o={courseId:t,itemId:n},c={argument:[],name:"getState"},f={argument:[],name:"getLatestSubmissionDraft"};return i.a.createElement(u.Query,{query:m,variables:{body:o},onCompleted:s,skip:!!a},function(e){var t=e.loading,n=e.data,s=e.refetch;if(t&&!a)return r({loading:t});var o=a||n.quizSessionMetaData.elements[0].id;return i.a.createElement(u.Query,{query:d,variables:{sessionId:o,questionDataArgs:c,responseDataArgs:f,skipFetchingResponses:!!a}},function(e){var t=e.loading,n=e.data,i=e.refetch,u=e.client;if(t)return r({loading:t});var c=n.quizQuestionData.elements[0].result,m=c.questions,d=c.responses,f=c.nextSubmissionDraftId,v=c.evaluation,p=((((((d||{}).elements||[])[0]||{}).result||{}).draft||{}).input||{}).responses,b=Object(l.a)(m,p,!!a),S=v&&v.score/v.maxScore,g=(v||{}).maxScore||b.reduce(function(e,t){return e+t.prompt.weightedScoring.maxScore},0),I=!m[0].isSubmitAllowed,y="NoDetails"===m[0].variant.detailLevel,E,D;return r({loading:t,quizFormData:b,sessionId:o,nextSubmissionDraftId:f,isSubmitted:I,isLimitedFeedback:y,attemptScore:S,totalPoints:g,hasDraft:!!p,refetchQuizData:function refetchQuizData(){return s().then(function(){return i()})},client:u})})})},v=f},bv1f:function(module,e,t){"use strict";var n=t("VkAN"),a=t.n(n),r=t("sbe7"),i=t.n(r),s=t("lTCR"),o=t.n(s),u=t("oJmH"),c=t.n(u);function _templateObject(){var e=a()(['\n  mutation QuizActions($sessionId: String!, $body: String!, $skipQuestionsField: Boolean!) {\n    action(sessionId: $sessionId, body: $body)\n      @rest(\n        type: "QuizActionData"\n        path: "onDemandExamSessions.v1/{args.sessionId}/actions"\n        method: "POST"\n        bodyKey: "body"\n      ) {\n      elements @type(name: "RestQuizQuestionDataElement") {\n        id\n        result @type(name: "RestQuizQuestionDataElementResult") {\n          nextSubmissionDraftId\n          evaluation\n          questions @skip(if: $skipQuestionsField)\n        }\n      }\n    }\n  }\n']);return _templateObject=function _templateObject(){return e},e}var l=o()(_templateObject()),m=function getSaveDraftMutation(e){return function(t,n,a){return e({variables:{body:{argument:{id:t,input:{responses:a}},name:"saveSubmissionDraft"},sessionId:n,skipQuestionsField:!0}})}},d=function getSubmitDraftMutation(e){return function(t,n){return e({variables:{body:{argument:{responses:n},name:"submitResponses"},sessionId:t,skipQuestionsField:!1}})}},f=function getAutoSubmitDraftMutation(e){return function(t){return e({variables:{body:{argument:{},name:"submitLatestSubmissionDraft"},sessionId:t,skipQuestionsField:!1}})}},v=function QuizMutations(e){var t=e.children;return i.a.createElement(u.Mutation,{mutation:l},function(e){var n=m(e),a=d(e),r=f(e);return t({saveDraftMutation:n,submitDraftMutation:a,autoSubmitDraftMutation:r})})};e.a=v},cOLe:function(module,exports,e){var t=e("kAoH"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},flPG:function(module,exports,e){var t=e("k3UC"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var a={transform:void 0},r=e("aET+")(t,a);t.locals&&(module.exports=t.locals)},"iY+7":function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("2jzc"),i=t("UUa2"),s=t("TOZ3"),o=t("cOLe"),u=t.n(o),c=function SkillLevelGraph(e){var t=e.readableScore,n=e.skillLevel,o=3*t,u=(t-r.f.Beginner)*(100/(r.f.Intermediate-r.f.Beginner)),c=(t-r.f.Intermediate)*(100/(r.f.Advanced-r.f.Intermediate));return a.a.createElement(s.b,{rootClassName:"rc-SkillLevelGraph",flexDirection:"column"},a.a.createElement(s.b,{rootClassName:"skill-indicator",justifyContent:"around",alignItems:"end"},a.a.createElement(i.a,{scoreSkillLevel:r.a.Beginner,skillLevel:n,left:o,readableScore:t}),a.a.createElement(i.a,{scoreSkillLevel:r.a.Intermediate,skillLevel:n,left:u,readableScore:t}),a.a.createElement(i.a,{scoreSkillLevel:r.a.Advanced,skillLevel:n,left:c,readableScore:t})),a.a.createElement(s.b,{rootClassName:"bars",justifyContent:"around"},a.a.createElement("div",{className:"level-bar beginner"}),a.a.createElement("div",{className:"level-bar intermediate"}),a.a.createElement("div",{className:"level-bar advanced"})),a.a.createElement(s.b,{rootClassName:"legend",justifyContent:"around"},a.a.createElement("div",{className:"level-bar"},"0"),a.a.createElement("div",{className:"level-bar"},"30"),a.a.createElement("div",{className:"level-bar"},"70")),a.a.createElement(s.b,{rootClassName:"legend description",justifyContent:"around"},a.a.createElement("div",{className:"level-bar"},r.a.Beginner),a.a.createElement("div",{className:"level-bar"},r.a.Intermediate),a.a.createElement("div",{className:"level-bar"},r.a.Advanced)))};e.a=c},k3UC:function(module,exports,e){},kAoH:function(module,exports,e){},oKlG:function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pt":true,"ru":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},uAMc:function(module,e,t){"use strict";var n=t("sbe7"),a=t.n(n),r=t("agp5"),i=t("RH4a"),s=t("0n3a"),o=t("zaiP"),u=t("LHEl"),c=t("wjH1"),l=t("bv1f"),m=function QuizActions(e){var t=e.ids,n=e.sessionId,m=e.children,d=e.nextSubmissionDraftId;return a.a.createElement(o.a,null,function(e){var o=e.item;if(!o)return null;var f=o.courseId,v=o.id;return a.a.createElement(u.a,{courseId:f,itemId:v},function(e){var u=e.refetch;return a.a.createElement(r.a,{ids:t},function(e){if(!e||!u)return m({});var t=e.some(function(e){return!(((e||{}).response||{}).definition||{}).value});return a.a.createElement(i.a,{itemId:v,courseId:f},function(r){var i=r.stepState,f=r.setStepState;return a.a.createElement(l.a,null,function(r){var l=r.saveDraftMutation,v=r.submitDraftMutation,p=r.autoSubmitDraftMutation,b=e.map(function(e){return{questionInstance:e.id,response:((e.response||{}).definition||{}).value}}),S=function saveDraft(){if(!i.isSaving&&!i.isSubmitting&&d)return f({isSaving:!0}),l(d,n,b).then(function(){return f({isSaving:!1})}).catch(function(e){return Object(c.a)(e,f)});return Promise.reject()},g=function autoSaveDraft(){if(!i.isAutoSaving&&!i.isSubmitting&&d)return f({isAutoSaving:!0}),l(d,n,b).then(function(){return f({isAutoSaving:!1})}).catch(function(e){return Object(c.a)(e,f)});return Promise.reject()},I=function refetchItemAndExamSummary(){return u().then(function(){return o.refetch()})},y=function submitDraft(){if(!i.isSubmitting)return f({isSubmitting:!0}),v(n,b).then(function(){return f({isSubmitting:!1})}).then(I).catch(function(e){return Object(c.a)(e,f)});return Promise.reject()},E=function submitLatestSubmissionDraft(){if(!i.isSubmitting)return f({isSubmitting:!0}),p(n).then(function(){return f({isSubmitting:!1})}).then(I).catch(function(e){return Object(c.a)(e,f)});return Promise.reject()};return a.a.createElement(s.a,{stepState:i,saveDraft:g,changedResponses:e},function(){return m({hasUnfilledResponses:t,saveDraft:S,autoSaveDraft:g,submitDraft:y,submitLatestSubmissionDraft:E})})})})})})})};e.a=m},vTTJ:function(module,e,t){"use strict";t.r(e),t.d(e,"AttemptPage",function(){return O}),t.d(e,"withRedirectToCover",function(){return x});var n=t("VbXa"),a=t.n(n),r=t("sbe7"),i=t.n(r),s=t("EqTq"),o=t("m10x"),u=t("+LJP"),c=t("LHEl"),l=t("oe9u"),m=t("/oRK"),d=t("XFHP"),f=t("22Sa"),v=t("eK4/"),p=t("aBK/"),b=t("uAMc"),S=t("RH4a"),g=t("zaiP"),I=t("wuov"),y=t("kYu0"),E=t("4QSv"),D=t("8ec0"),h=t("l0R+"),k=t("3Gfs"),C=t("L2S7"),A=t("GZYn"),N=t("VtNW"),T=t.n(N),j=t("3AUy"),P=t.n(j),Q=Object(s.a)("AttemptPage"),O=function(e){function AttemptPage(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={showSkillsNotification:!0},t.dismissSkillsNotification=function(){t.setState({showSkillsNotification:!1})},t}a()(AttemptPage,e);var t=AttemptPage.prototype;return t.componentDidMount=function componentDidMount(){var e=this.props,t=e.shouldRedirectToCover,n=e.redirectToCover;t&&n()},t.render=function render(){var e=this,t=this.props,n=t.redirectToCover,a=t.addRedirectToCoverToRouteParams,r=t.examSessionId,s=this.state.showSkillsNotification;return i.a.createElement(g.a,null,function(t){var u=t.item;if(!u)return null;return i.a.createElement(y.a,{standardProctorConfigurationId:u.contentSummary&&"exam"===u.contentSummary.typeName&&u.contentSummary.definition.standardProctorConfigurationId||null},function(t){var g=t.shouldShowTimer,y=t.timeLimit,N=t.secondsLeftInLatestAttempt,j=t.refetch,P=t.remainingAttempts;return i.a.createElement(f.a,{onClose:n,headerLeft:i.a.createElement(l.a,{headerText:u.name,itemTypeText:T()("Graded Quiz"),timeCommitment:u.timeCommitment}),headerRight:i.a.createElement(p.a,{courseId:u.courseId,itemId:u.id,examSessionId:r},function(e){var t=e.isSubmitted;return i.a.createElement(m.a,{deadline:u.deadline,remainingTimeInMs:"number"==typeof N?1e3*N:null,showTimer:g&&!t,timerId:Object(D.a)(u.id),examSessionId:r})}),topBanner:i.a.createElement(p.a,{courseId:u.courseId,itemId:u.id,examSessionId:r},function(t){var a=t.isSubmitted,r=t.client,o,l=(u.contentSummary&&"exam"===u.contentSummary.typeName&&u.contentSummary.definition||{}).passingFraction;if(a&&u.itemGrade){var m,d=(u.itemGrade||{}).isPassed,f=Object(A.b)(d,u.isCumulativeGraded,P);return i.a.createElement(c.a,{courseId:u.courseId,itemId:u.id},function(t){var a=t.lockingConfigurationSummary,r=t.bestEvaluation;return i.a.createElement("div",null,i.a.createElement(E.a,{itemGrade:u.itemGrade,computedScore:(r||{}).score,maxScore:(r||{}).maxScore,passingFraction:l,isCumulativeGraded:u.isCumulativeGraded,onKeepLearningClick:n,remainingAttempts:P,lockingConfigurationSummary:a,onTryAgainClick:n}),Object(k.a)()&&s&&f===A.a.PASSED&&i.a.createElement(C.a,{onDismiss:e.dismissSkillsNotification,courseId:u.courseId,itemId:u.id}))})}return null})},i.a.createElement(p.a,{courseId:u.courseId,itemId:u.id,onQuizSessionQueryCompleted:function onQuizSessionQueryCompleted(){return j()},examSessionId:r},function(e){var t=e.quizFormData,n=e.sessionId,r=e.nextSubmissionDraftId,s=e.attemptScore,c=e.totalPoints,l=e.isSubmitted,m=e.hasDraft,f=e.isLimitedFeedback;if(!t||!n)return i.a.createElement(I.a,null);if(f)return null;var p=t.map(function(e){return e.prompt.id});return i.a.createElement(S.a,{itemId:u.id,courseId:u.courseId},function(e){var f=e.stepState,S=e.setStepState;return i.a.createElement("div",{className:Q()},i.a.createElement("div",{className:Q("header")},i.a.createElement(o.d,null,u.name),l&&"number"==typeof s?i.a.createElement("div",{className:Q("submission-grade")},i.a.createElement(o.h,{tag:"span"},T()("Latest Submission Grade")),i.a.createElement("div",{className:Q("grade-percent")},"".concat(Object(h.a)(s),"%"))):i.a.createElement(o.a,{rootClassName:Q("points")},i.a.createElement(o.h,{tag:"span"},T()("Total points #{totalPoints}",{totalPoints:c})))),i.a.createElement("div",{className:Q("prompts")},t.map(function(e,t){return i.a.createElement(v.a,{key:e.prompt.id,quizQuestion:e,index:t,isReadOnly:!!l,isDisabled:!!(f||{}).isSaving||!!(f||{}).isSubmitting})})),i.a.createElement(b.a,{ids:p,sessionId:n,nextSubmissionDraftId:r},function(e){var t=e.hasUnfilledResponses,n=e.saveDraft,r=e.autoSaveDraft,s=e.submitDraft,o=e.submitLatestSubmissionDraft;return i.a.createElement(d.a,{hasUnfilledResponses:t,itemId:u.id,courseId:u.courseId,saveDraft:n,autoSaveDraft:r,isSubmitted:l,submitDraft:function submitDraft(){return s?s().then(function(){a()}):Promise.reject()},submitLatestSubmissionDraft:function submitLatestSubmissionDraft(){return o?o().then(function(){a()}):Promise.reject()},hasTimer:g,hasDraft:m,stepState:f,setStepState:S})}))})}))})})},AttemptPage}(i.a.Component),x=Object(u.a)(function(e,t){var n=t.refetchCoverPageData;return{redirectToCover:function redirectToCover(){n&&n(),e.push({name:"quiz-cover",params:e.params,query:e.location.query}),window.location.reload()},addRedirectToCoverToRouteParams:function addRedirectToCoverToRouteParams(){e.push({name:"quiz-attempt",params:e.params,query:{redirectToCover:!0}})},shouldRedirectToCover:e.location.query.redirectToCover}});e.default=x(O)}}]);
//# sourceMappingURL=en.42.6a978dc45cd161c75c14.js.map