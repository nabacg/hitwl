// Compiled by ClojureScript 0.0-2311
goog.provide('reagent_forms.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent_forms.datepicker');
goog.require('reagent.core');
goog.require('clojure.walk');
goog.require('reagent_forms.datepicker');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.walk');
reagent_forms.core.value_of = (function value_of(element){return element.target.value;
});
reagent_forms.core.id__GT_path = cljs.core.memoize.call(null,(function (id){return cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,cljs.core.name.call(null,id),/\./));
}));
reagent_forms.core.set_doc_value = (function set_doc_value(doc,id,value,events){var path = reagent_forms.core.id__GT_path.call(null,id);return cljs.core.reduce.call(null,((function (path){
return (function (p1__7095_SHARP_,p2__7094_SHARP_){var or__3052__auto__ = p2__7094_SHARP_.call(null,path,value,p1__7095_SHARP_);if(cljs.core.truth_(or__3052__auto__))
{return or__3052__auto__;
} else
{return p1__7095_SHARP_;
}
});})(path))
,cljs.core.assoc_in.call(null,doc,path,value),events);
});
reagent_forms.core.mk_save_fn = (function mk_save_fn(doc,events){return (function (id,value){return cljs.core.swap_BANG_.call(null,doc,reagent_forms.core.set_doc_value,id,value,events);
});
});
reagent_forms.core.format_type = (function (){var method_table__3918__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__3919__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__3920__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__3921__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__3922__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("format-type",((function (method_table__3918__auto__,prefer_table__3919__auto__,method_cache__3920__auto__,cached_hierarchy__3921__auto__,hierarchy__3922__auto__){
return (function (field_type,_){if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"numeric","numeric",-1495594714)], null))))
{return new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
} else
{return field_type;
}
});})(method_table__3918__auto__,prefer_table__3919__auto__,method_cache__3920__auto__,cached_hierarchy__3921__auto__,hierarchy__3922__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__3922__auto__,method_table__3918__auto__,prefer_table__3919__auto__,method_cache__3920__auto__,cached_hierarchy__3921__auto__));
})();
reagent_forms.core.valid_number_ending_QMARK_ = (function valid_number_ending_QMARK_(n){return ((cljs.core.not_EQ_.call(null,".",cljs.core.last.call(null,cljs.core.butlast.call(null,n)))) && (cljs.core._EQ_.call(null,".",cljs.core.last.call(null,n)))) || (cljs.core._EQ_.call(null,"0",cljs.core.last.call(null,n)));
});
reagent_forms.core.format_value = (function format_value(fmt,value){if(cljs.core.truth_((function (){var and__3040__auto__ = value;if(cljs.core.truth_(and__3040__auto__))
{return fmt;
} else
{return and__3040__auto__;
}
})()))
{return goog.string.format(fmt,value);
} else
{return value;
}
});
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (_,n){if(cljs.core.truth_(cljs.core.not_empty.call(null,n)))
{var parsed = parseFloat(n);if(cljs.core.truth_(isNaN(parsed)))
{return null;
} else
{if(reagent_forms.core.valid_number_ending_QMARK_.call(null,n))
{return n;
} else
{return parsed;
}
}
} else
{return null;
}
}));
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){return value;
}));
reagent_forms.core.bind = (function (){var method_table__3918__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__3919__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__3920__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__3921__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__3922__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("bind",((function (method_table__3918__auto__,prefer_table__3919__auto__,method_cache__3920__auto__,cached_hierarchy__3921__auto__,hierarchy__3922__auto__){
return (function (p__7096,_){var map__7097 = p__7096;var map__7097__$1 = ((cljs.core.seq_QMARK_.call(null,map__7097))?cljs.core.apply.call(null,cljs.core.hash_map,map__7097):map__7097);var field = cljs.core.get.call(null,map__7097__$1,new cljs.core.Keyword(null,"field","field",-1302436500));if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null))))
{return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else
{return field;
}
});})(method_table__3918__auto__,prefer_table__3919__auto__,method_cache__3920__auto__,cached_hierarchy__3921__auto__,hierarchy__3922__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__3922__auto__,method_table__3918__auto__,prefer_table__3919__auto__,method_cache__3920__auto__,cached_hierarchy__3921__auto__));
})();
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__7099,p__7100){var map__7101 = p__7099;var map__7101__$1 = ((cljs.core.seq_QMARK_.call(null,map__7101))?cljs.core.apply.call(null,cljs.core.hash_map,map__7101):map__7101);var fmt = cljs.core.get.call(null,map__7101__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));var id = cljs.core.get.call(null,map__7101__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var field = cljs.core.get.call(null,map__7101__$1,new cljs.core.Keyword(null,"field","field",-1302436500));var map__7102 = p__7100;var map__7102__$1 = ((cljs.core.seq_QMARK_.call(null,map__7102))?cljs.core.apply.call(null,cljs.core.hash_map,map__7102):map__7102);var save_BANG_ = cljs.core.get.call(null,map__7102__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));var get = cljs.core.get.call(null,map__7102__$1,new cljs.core.Keyword(null,"get","get",1683182755));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var value = (function (){var or__3052__auto__ = get.call(null,id);if(cljs.core.truth_(or__3052__auto__))
{return or__3052__auto__;
} else
{return "";
}
})();return reagent_forms.core.format_value.call(null,fmt,value);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__7101,map__7101__$1,fmt,id,field,map__7102,map__7102__$1,save_BANG_,get){
return (function (p1__7098_SHARP_){return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,field,reagent_forms.core.value_of.call(null,p1__7098_SHARP_)));
});})(map__7101,map__7101__$1,fmt,id,field,map__7102,map__7102__$1,save_BANG_,get))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__7103,p__7104){var map__7105 = p__7103;var map__7105__$1 = ((cljs.core.seq_QMARK_.call(null,map__7105))?cljs.core.apply.call(null,cljs.core.hash_map,map__7105):map__7105);var id = cljs.core.get.call(null,map__7105__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var map__7106 = p__7104;var map__7106__$1 = ((cljs.core.seq_QMARK_.call(null,map__7106))?cljs.core.apply.call(null,cljs.core.hash_map,map__7106):map__7106);var checked = cljs.core.get.call(null,map__7106__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));var save_BANG_ = cljs.core.get.call(null,map__7106__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));var get = cljs.core.get.call(null,map__7106__$1,new cljs.core.Keyword(null,"get","get",1683182755));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,checked),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__7105,map__7105__$1,id,map__7106,map__7106__$1,checked,save_BANG_,get){
return (function (){return save_BANG_.call(null,id,cljs.core.swap_BANG_.call(null,checked,cljs.core.not));
});})(map__7105,map__7105__$1,id,map__7106,map__7106__$1,checked,save_BANG_,get))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){return null;
}));
/**
* @param {...*} var_args
*/
reagent_forms.core.set_attrs = (function() { 
var set_attrs__delegate = function (p__7107,opts,p__7108){var vec__7111 = p__7107;var type = cljs.core.nth.call(null,vec__7111,(0),null);var attrs = cljs.core.nth.call(null,vec__7111,(1),null);var body = cljs.core.nthnext.call(null,vec__7111,(2));var vec__7112 = p__7108;var default_attrs = cljs.core.nth.call(null,vec__7112,(0),null);return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,default_attrs,reagent_forms.core.bind.call(null,attrs,opts),attrs)], null),body);
};
var set_attrs = function (p__7107,opts,var_args){
var p__7108 = null;if (arguments.length > 2) {
  p__7108 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attrs__delegate.call(this,p__7107,opts,p__7108);};
set_attrs.cljs$lang$maxFixedArity = 2;
set_attrs.cljs$lang$applyTo = (function (arglist__7113){
var p__7107 = cljs.core.first(arglist__7113);
arglist__7113 = cljs.core.next(arglist__7113);
var opts = cljs.core.first(arglist__7113);
var p__7108 = cljs.core.rest(arglist__7113);
return set_attrs__delegate(p__7107,opts,p__7108);
});
set_attrs.cljs$core$IFn$_invoke$arity$variadic = set_attrs__delegate;
return set_attrs;
})()
;
reagent_forms.core.init_field = (function (){var method_table__3918__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__3919__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__3920__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__3921__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__3922__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("init-field",((function (method_table__3918__auto__,prefer_table__3919__auto__,method_cache__3920__auto__,cached_hierarchy__3921__auto__,hierarchy__3922__auto__){
return (function (p__7114,_){var vec__7115 = p__7114;var ___$1 = cljs.core.nth.call(null,vec__7115,(0),null);var map__7116 = cljs.core.nth.call(null,vec__7115,(1),null);var map__7116__$1 = ((cljs.core.seq_QMARK_.call(null,map__7116))?cljs.core.apply.call(null,cljs.core.hash_map,map__7116):map__7116);var field = cljs.core.get.call(null,map__7116__$1,new cljs.core.Keyword(null,"field","field",-1302436500));var field__$1 = cljs.core.keyword.call(null,field);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null))))
{return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else
{return field__$1;
}
});})(method_table__3918__auto__,prefer_table__3919__auto__,method_cache__3920__auto__,cached_hierarchy__3921__auto__,hierarchy__3922__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__3922__auto__,method_table__3918__auto__,prefer_table__3919__auto__,method_cache__3920__auto__,cached_hierarchy__3921__auto__));
})();
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__7117,opts){var vec__7118 = p__7117;var _ = cljs.core.nth.call(null,vec__7118,(0),null);var map__7119 = cljs.core.nth.call(null,vec__7118,(1),null);var map__7119__$1 = ((cljs.core.seq_QMARK_.call(null,map__7119))?cljs.core.apply.call(null,cljs.core.hash_map,map__7119):map__7119);var field = cljs.core.get.call(null,map__7119__$1,new cljs.core.Keyword(null,"field","field",-1302436500));var component = vec__7118;return ((function (vec__7118,_,map__7119,map__7119__$1,field,component){
return (function (){return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
});
;})(vec__7118,_,map__7119,map__7119__$1,field,component))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (p__7121,p__7122){var vec__7123 = p__7121;var type = cljs.core.nth.call(null,vec__7123,(0),null);var map__7124 = cljs.core.nth.call(null,vec__7123,(1),null);var map__7124__$1 = ((cljs.core.seq_QMARK_.call(null,map__7124))?cljs.core.apply.call(null,cljs.core.hash_map,map__7124):map__7124);var attrs = map__7124__$1;var fmt = cljs.core.get.call(null,map__7124__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));var id = cljs.core.get.call(null,map__7124__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var map__7125 = p__7122;var map__7125__$1 = ((cljs.core.seq_QMARK_.call(null,map__7125))?cljs.core.apply.call(null,cljs.core.hash_map,map__7125):map__7125);var save_BANG_ = cljs.core.get.call(null,map__7125__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));var get = cljs.core.get.call(null,map__7125__$1,new cljs.core.Keyword(null,"get","get",1683182755));var display_value = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),false,new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id)], null));return ((function (display_value,vec__7123,type,map__7124,map__7124__$1,attrs,fmt,id,map__7125,map__7125__$1,save_BANG_,get){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var doc_value = (function (){var or__3052__auto__ = get.call(null,id);if(cljs.core.truth_(or__3052__auto__))
{return or__3052__auto__;
} else
{return "";
}
})();var map__7126 = cljs.core.deref.call(null,display_value);var map__7126__$1 = ((cljs.core.seq_QMARK_.call(null,map__7126))?cljs.core.apply.call(null,cljs.core.hash_map,map__7126):map__7126);var value = cljs.core.get.call(null,map__7126__$1,new cljs.core.Keyword(null,"value","value",305978217));var changed_self_QMARK_ = cljs.core.get.call(null,map__7126__$1,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);cljs.core.swap_BANG_.call(null,display_value,cljs.core.dissoc,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));
return reagent_forms.core.format_value.call(null,fmt,value__$1);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (display_value,vec__7123,type,map__7124,map__7124__$1,attrs,fmt,id,map__7125,map__7125__$1,save_BANG_,get){
return (function (p1__7120_SHARP_){var temp__4124__auto__ = reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.value_of.call(null,p1__7120_SHARP_));if(cljs.core.truth_(temp__4124__auto__))
{var value = temp__4124__auto__;cljs.core.reset_BANG_.call(null,display_value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),true,new cljs.core.Keyword(null,"value","value",305978217),value], null));
return save_BANG_.call(null,id,parseFloat(value));
} else
{return save_BANG_.call(null,id,null);
}
});})(display_value,vec__7123,type,map__7124,map__7124__$1,attrs,fmt,id,map__7125,map__7125__$1,save_BANG_,get))
], null),attrs)], null);
});
;})(display_value,vec__7123,type,map__7124,map__7124__$1,attrs,fmt,id,map__7125,map__7125__$1,save_BANG_,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"datepicker","datepicker",821741450),(function (p__7128,p__7129){var vec__7130 = p__7128;var _ = cljs.core.nth.call(null,vec__7130,(0),null);var map__7131 = cljs.core.nth.call(null,vec__7130,(1),null);var map__7131__$1 = ((cljs.core.seq_QMARK_.call(null,map__7131))?cljs.core.apply.call(null,cljs.core.hash_map,map__7131):map__7131);var inline = cljs.core.get.call(null,map__7131__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));var date_format = cljs.core.get.call(null,map__7131__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));var id = cljs.core.get.call(null,map__7131__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var map__7132 = p__7129;var map__7132__$1 = ((cljs.core.seq_QMARK_.call(null,map__7132))?cljs.core.apply.call(null,cljs.core.hash_map,map__7132):map__7132);var save_BANG_ = cljs.core.get.call(null,map__7132__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));var get = cljs.core.get.call(null,map__7132__$1,new cljs.core.Keyword(null,"get","get",1683182755));var fmt = reagent_forms.datepicker.parse_format.call(null,date_format);var today = (new Date());var expanded_QMARK_ = reagent.core.atom.call(null,false);return ((function (fmt,today,expanded_QMARK_,vec__7130,_,map__7131,map__7131__$1,inline,date_format,id,map__7132,map__7132__$1,save_BANG_,get){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4126__auto__ = get.call(null,id);if(cljs.core.truth_(temp__4126__auto__))
{var date = temp__4126__auto__;return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else
{return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (fmt,today,expanded_QMARK_,vec__7130,_,map__7131,map__7131__$1,inline,date_format,id,map__7132,map__7132__$1,save_BANG_,get){
return (function (){return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(fmt,today,expanded_QMARK_,vec__7130,_,map__7131,map__7131__$1,inline,date_format,id,map__7132,map__7132__$1,save_BANG_,get))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),expanded_QMARK_,((function (fmt,today,expanded_QMARK_,vec__7130,_,map__7131,map__7131__$1,inline,date_format,id,map__7132,map__7132__$1,save_BANG_,get){
return (function (){return get.call(null,id);
});})(fmt,today,expanded_QMARK_,vec__7130,_,map__7131,map__7131__$1,inline,date_format,id,map__7132,map__7132__$1,save_BANG_,get))
,((function (fmt,today,expanded_QMARK_,vec__7130,_,map__7131,map__7131__$1,inline,date_format,id,map__7132,map__7132__$1,save_BANG_,get){
return (function (p1__7127_SHARP_){return save_BANG_.call(null,id,p1__7127_SHARP_);
});})(fmt,today,expanded_QMARK_,vec__7130,_,map__7131,map__7131__$1,inline,date_format,id,map__7132,map__7132__$1,save_BANG_,get))
], null)], null);
});
;})(fmt,today,expanded_QMARK_,vec__7130,_,map__7131,map__7131__$1,inline,date_format,id,map__7132,map__7132__$1,save_BANG_,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__7133,p__7134){var vec__7135 = p__7133;var _ = cljs.core.nth.call(null,vec__7135,(0),null);var map__7136 = cljs.core.nth.call(null,vec__7135,(1),null);var map__7136__$1 = ((cljs.core.seq_QMARK_.call(null,map__7136))?cljs.core.apply.call(null,cljs.core.hash_map,map__7136):map__7136);var field = cljs.core.get.call(null,map__7136__$1,new cljs.core.Keyword(null,"field","field",-1302436500));var id = cljs.core.get.call(null,map__7136__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var component = vec__7135;var map__7137 = p__7134;var map__7137__$1 = ((cljs.core.seq_QMARK_.call(null,map__7137))?cljs.core.apply.call(null,cljs.core.hash_map,map__7137):map__7137);var opts = map__7137__$1;var get = cljs.core.get.call(null,map__7137__$1,new cljs.core.Keyword(null,"get","get",1683182755));var state = reagent.core.atom.call(null,get.call(null,id));return ((function (state,vec__7135,_,map__7136,map__7136__$1,field,id,component,map__7137,map__7137__$1,opts,get){
return (function (){return reagent_forms.core.set_attrs.call(null,component,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"checked","checked",-50955819),state),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
});
;})(state,vec__7135,_,map__7136,map__7136__$1,field,id,component,map__7137,map__7137__$1,opts,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__7138,p__7139){var vec__7140 = p__7138;var type = cljs.core.nth.call(null,vec__7140,(0),null);var map__7141 = cljs.core.nth.call(null,vec__7140,(1),null);var map__7141__$1 = ((cljs.core.seq_QMARK_.call(null,map__7141))?cljs.core.apply.call(null,cljs.core.hash_map,map__7141):map__7141);var attrs = map__7141__$1;var placeholder = cljs.core.get.call(null,map__7141__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));var postamble = cljs.core.get.call(null,map__7141__$1,new cljs.core.Keyword(null,"postamble","postamble",-500033366));var preamble = cljs.core.get.call(null,map__7141__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));var id = cljs.core.get.call(null,map__7141__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var map__7142 = p__7139;var map__7142__$1 = ((cljs.core.seq_QMARK_.call(null,map__7142))?cljs.core.apply.call(null,cljs.core.hash_map,map__7142):map__7142);var get = cljs.core.get.call(null,map__7142__$1,new cljs.core.Keyword(null,"get","get",1683182755));return ((function (vec__7140,type,map__7141,map__7141__$1,attrs,placeholder,postamble,preamble,id,map__7142,map__7142__$1,get){
return (function (){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto__ = get.call(null,id);if(cljs.core.truth_(temp__4124__auto__))
{var value = temp__4124__auto__;return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(postamble));
} else
{return placeholder;
}
})()], null);
});
;})(vec__7140,type,map__7141,map__7141__$1,attrs,placeholder,postamble,preamble,id,map__7142,map__7142__$1,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"alert","alert",-571950580),(function (p__7143,p__7144){var vec__7145 = p__7143;var type = cljs.core.nth.call(null,vec__7145,(0),null);var map__7146 = cljs.core.nth.call(null,vec__7145,(1),null);var map__7146__$1 = ((cljs.core.seq_QMARK_.call(null,map__7146))?cljs.core.apply.call(null,cljs.core.hash_map,map__7146):map__7146);var attrs = map__7146__$1;var touch_event = cljs.core.get.call(null,map__7146__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));var event = cljs.core.get.call(null,map__7146__$1,new cljs.core.Keyword(null,"event","event",301435442));var id = cljs.core.get.call(null,map__7146__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var body = cljs.core.nthnext.call(null,vec__7145,(2));var map__7147 = p__7144;var map__7147__$1 = ((cljs.core.seq_QMARK_.call(null,map__7147))?cljs.core.apply.call(null,cljs.core.hash_map,map__7147):map__7147);var opts = map__7147__$1;var save_BANG_ = cljs.core.get.call(null,map__7147__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));var get = cljs.core.get.call(null,map__7147__$1,new cljs.core.Keyword(null,"get","get",1683182755));return ((function (vec__7145,type,map__7146,map__7146__$1,attrs,touch_event,event,id,body,map__7147,map__7147__$1,opts,save_BANG_,get){
return (function (){if(cljs.core.truth_(event))
{if(cljs.core.truth_(event.call(null,get.call(null,id))))
{return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else
{return null;
}
} else
{var temp__4124__auto__ = cljs.core.not_empty.call(null,get.call(null,id));if(cljs.core.truth_(temp__4124__auto__))
{var message = temp__4124__auto__;return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__3052__auto__ = touch_event;if(cljs.core.truth_(or__3052__auto__))
{return or__3052__auto__;
} else
{return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4124__auto__,vec__7145,type,map__7146,map__7146__$1,attrs,touch_event,event,id,body,map__7147,map__7147__$1,opts,save_BANG_,get){
return (function (){return save_BANG_.call(null,id,null);
});})(message,temp__4124__auto__,vec__7145,type,map__7146,map__7146__$1,attrs,touch_event,event,id,body,map__7147,map__7147__$1,opts,save_BANG_,get))
], true, false),"X"], null),message], null);
} else
{return null;
}
}
});
;})(vec__7145,type,map__7146,map__7146__$1,attrs,touch_event,event,id,body,map__7147,map__7147__$1,opts,save_BANG_,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (p__7148,p__7149){var vec__7150 = p__7148;var type = cljs.core.nth.call(null,vec__7150,(0),null);var map__7151 = cljs.core.nth.call(null,vec__7150,(1),null);var map__7151__$1 = ((cljs.core.seq_QMARK_.call(null,map__7151))?cljs.core.apply.call(null,cljs.core.hash_map,map__7151):map__7151);var attrs = map__7151__$1;var value = cljs.core.get.call(null,map__7151__$1,new cljs.core.Keyword(null,"value","value",305978217));var id = cljs.core.get.call(null,map__7151__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var field = cljs.core.get.call(null,map__7151__$1,new cljs.core.Keyword(null,"field","field",-1302436500));var body = cljs.core.nthnext.call(null,vec__7150,(2));var map__7152 = p__7149;var map__7152__$1 = ((cljs.core.seq_QMARK_.call(null,map__7152))?cljs.core.apply.call(null,cljs.core.hash_map,map__7152):map__7152);var save_BANG_ = cljs.core.get.call(null,map__7152__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));var get = cljs.core.get.call(null,map__7152__$1,new cljs.core.Keyword(null,"get","get",1683182755));var state = reagent.core.atom.call(null,cljs.core._EQ_.call(null,value,get.call(null,id)));return ((function (state,vec__7150,type,map__7151,map__7151__$1,attrs,value,id,field,body,map__7152,map__7152__$1,save_BANG_,get){
return (function (){return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (state,vec__7150,type,map__7151,map__7151__$1,attrs,value,id,field,body,map__7152,map__7152__$1,save_BANG_,get){
return (function (){save_BANG_.call(null,id,value);
return cljs.core.reset_BANG_.call(null,state,cljs.core._EQ_.call(null,value,get.call(null,id)));
});})(state,vec__7150,type,map__7151,map__7151__$1,attrs,value,id,field,body,map__7152,map__7152__$1,save_BANG_,get))
], null),attrs)], null),body);
});
;})(state,vec__7150,type,map__7151,map__7151__$1,attrs,value,id,field,body,map__7152,map__7152__$1,save_BANG_,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"typeahead","typeahead",-1364611797),(function (p__7154,p__7155){var vec__7156 = p__7154;var type = cljs.core.nth.call(null,vec__7156,(0),null);var map__7157 = cljs.core.nth.call(null,vec__7156,(1),null);var map__7157__$1 = ((cljs.core.seq_QMARK_.call(null,map__7157))?cljs.core.apply.call(null,cljs.core.hash_map,map__7157):map__7157);var data_source = cljs.core.get.call(null,map__7157__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));var id = cljs.core.get.call(null,map__7157__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var map__7158 = p__7155;var map__7158__$1 = ((cljs.core.seq_QMARK_.call(null,map__7158))?cljs.core.apply.call(null,cljs.core.hash_map,map__7158):map__7158);var save_BANG_ = cljs.core.get.call(null,map__7158__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));var get = cljs.core.get.call(null,map__7158__$1,new cljs.core.Keyword(null,"get","get",1683182755));var typeahead_hidden_QMARK_ = reagent.core.atom.call(null,true);var mouse_on_list_QMARK_ = reagent.core.atom.call(null,false);return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__7156,type,map__7157,map__7157__$1,data_source,id,map__7158,map__7158__$1,save_BANG_,get){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__7156,type,map__7157,map__7157__$1,data_source,id,map__7158,map__7158__$1,save_BANG_,get){
return (function (){if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_)))
{return null;
} else
{return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);
}
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__7156,type,map__7157,map__7157__$1,data_source,id,map__7158,map__7158__$1,save_BANG_,get))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__7156,type,map__7157,map__7157__$1,data_source,id,map__7158,map__7158__$1,save_BANG_,get){
return (function (p1__7153_SHARP_){save_BANG_.call(null,id,save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__7153_SHARP_)));
return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__7156,type,map__7157,map__7157__$1,data_source,id,map__7158,map__7158__$1,save_BANG_,get))
], null)], null),(function (){var temp__4126__auto__ = get.call(null,id);if(cljs.core.truth_(temp__4126__auto__))
{var value = temp__4126__auto__;var results = data_source.call(null,value.toLowerCase());return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.typeahead","ul.typeahead",-1230632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),(function (){var or__3052__auto__ = cljs.core.empty_QMARK_.call(null,results);if(or__3052__auto__)
{return or__3052__auto__;
} else
{return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})(),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__7156,type,map__7157,map__7157__$1,data_source,id,map__7158,map__7158__$1,save_BANG_,get){
return (function (){return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__7156,type,map__7157,map__7157__$1,data_source,id,map__7158,map__7158__$1,save_BANG_,get))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__7156,type,map__7157,map__7157__$1,data_source,id,map__7158,map__7158__$1,save_BANG_,get){
return (function (){return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__7156,type,map__7157,map__7157__$1,data_source,id,map__7158,map__7158__$1,save_BANG_,get))
], null),(function (){var iter__3777__auto__ = ((function (results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__7156,type,map__7157,map__7157__$1,data_source,id,map__7158,map__7158__$1,save_BANG_,get){
return (function iter__7159(s__7160){return (new cljs.core.LazySeq(null,((function (results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__7156,type,map__7157,map__7157__$1,data_source,id,map__7158,map__7158__$1,save_BANG_,get){
return (function (){var s__7160__$1 = s__7160;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__7160__$1);if(temp__4126__auto____$1)
{var s__7160__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__7160__$2))
{var c__3775__auto__ = cljs.core.chunk_first.call(null,s__7160__$2);var size__3776__auto__ = cljs.core.count.call(null,c__3775__auto__);var b__7162 = cljs.core.chunk_buffer.call(null,size__3776__auto__);if((function (){var i__7161 = (0);while(true){
if((i__7161 < size__3776__auto__))
{var result = cljs.core._nth.call(null,c__3775__auto__,i__7161);cljs.core.chunk_append.call(null,b__7162,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__7161,result,c__3775__auto__,size__3776__auto__,b__7162,s__7160__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__7156,type,map__7157,map__7157__$1,data_source,id,map__7158,map__7158__$1,save_BANG_,get){
return (function (){cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);
return save_BANG_.call(null,id,result);
});})(i__7161,result,c__3775__auto__,size__3776__auto__,b__7162,s__7160__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__7156,type,map__7157,map__7157__$1,data_source,id,map__7158,map__7158__$1,save_BANG_,get))
], null),result], null));
{
var G__7163 = (i__7161 + (1));
i__7161 = G__7163;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7162),iter__7159.call(null,cljs.core.chunk_rest.call(null,s__7160__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7162),null);
}
} else
{var result = cljs.core.first.call(null,s__7160__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (result,s__7160__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__7156,type,map__7157,map__7157__$1,data_source,id,map__7158,map__7158__$1,save_BANG_,get){
return (function (){cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);
return save_BANG_.call(null,id,result);
});})(result,s__7160__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__7156,type,map__7157,map__7157__$1,data_source,id,map__7158,map__7158__$1,save_BANG_,get))
], null),result], null),iter__7159.call(null,cljs.core.rest.call(null,s__7160__$2)));
}
} else
{return null;
}
break;
}
});})(results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__7156,type,map__7157,map__7157__$1,data_source,id,map__7158,map__7158__$1,save_BANG_,get))
,null,null));
});})(results,value,temp__4126__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__7156,type,map__7157,map__7157__$1,data_source,id,map__7158,map__7158__$1,save_BANG_,get))
;return iter__3777__auto__.call(null,results);
})()], null);
} else
{return null;
}
})()], null);
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__7156,type,map__7157,map__7157__$1,data_source,id,map__7158,map__7158__$1,save_BANG_,get))
}));
reagent_forms.core.group_item = (function group_item(p__7164,p__7165,selections,field,id){var vec__7169 = p__7164;var type = cljs.core.nth.call(null,vec__7169,(0),null);var map__7170 = cljs.core.nth.call(null,vec__7169,(1),null);var map__7170__$1 = ((cljs.core.seq_QMARK_.call(null,map__7170))?cljs.core.apply.call(null,cljs.core.hash_map,map__7170):map__7170);var attrs = map__7170__$1;var touch_event = cljs.core.get.call(null,map__7170__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));var key = cljs.core.get.call(null,map__7170__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var body = cljs.core.nthnext.call(null,vec__7169,(2));var map__7171 = p__7165;var map__7171__$1 = ((cljs.core.seq_QMARK_.call(null,map__7171))?cljs.core.apply.call(null,cljs.core.hash_map,map__7171):map__7171);var multi_select = cljs.core.get.call(null,map__7171__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));var save_BANG_ = cljs.core.get.call(null,map__7171__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));var get = cljs.core.get.call(null,map__7171__$1,new cljs.core.Keyword(null,"get","get",1683182755));var handle_click_BANG_ = ((function (vec__7169,type,map__7170,map__7170__$1,attrs,touch_event,key,body,map__7171,map__7171__$1,multi_select,save_BANG_,get){
return (function handle_click_BANG_(){if(cljs.core.truth_(multi_select))
{cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);
return save_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
} else
{var value = key.call(null,cljs.core.deref.call(null,selections));cljs.core.reset_BANG_.call(null,selections,new cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not.call(null,value)], true, false));
return save_BANG_.call(null,id,(cljs.core.truth_(key.call(null,cljs.core.deref.call(null,selections)))?key:null));
}
});})(vec__7169,type,map__7170,map__7170__$1,attrs,touch_event,key,body,map__7171,map__7171__$1,multi_select,save_BANG_,get))
;
return ((function (vec__7169,type,map__7170,map__7170__$1,attrs,touch_event,key,body,map__7171,map__7171__$1,multi_select,save_BANG_,get){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(key.call(null,cljs.core.deref.call(null,selections)))?"active":null),(function (){var or__3052__auto__ = touch_event;if(cljs.core.truth_(or__3052__auto__))
{return or__3052__auto__;
} else
{return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),handle_click_BANG_], true, false),attrs),body], null);
});
;})(vec__7169,type,map__7170,map__7170__$1,attrs,touch_event,key,body,map__7171,map__7171__$1,multi_select,save_BANG_,get))
});
reagent_forms.core.mk_selections = (function mk_selections(id,selectors,p__7172){var map__7177 = p__7172;var map__7177__$1 = ((cljs.core.seq_QMARK_.call(null,map__7177))?cljs.core.apply.call(null,cljs.core.hash_map,map__7177):map__7177);var multi_select = cljs.core.get.call(null,map__7177__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));var get = cljs.core.get.call(null,map__7177__$1,new cljs.core.Keyword(null,"get","get",1683182755));var value = get.call(null,id);return cljs.core.reduce.call(null,((function (value,map__7177,map__7177__$1,multi_select,get){
return (function (m,p__7178){var vec__7179 = p__7178;var _ = cljs.core.nth.call(null,vec__7179,(0),null);var map__7180 = cljs.core.nth.call(null,vec__7179,(1),null);var map__7180__$1 = ((cljs.core.seq_QMARK_.call(null,map__7180))?cljs.core.apply.call(null,cljs.core.hash_map,map__7180):map__7180);var key = cljs.core.get.call(null,map__7180__$1,new cljs.core.Keyword(null,"key","key",-1516042587));return cljs.core.assoc.call(null,m,key,cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__7177,map__7177__$1,multi_select,get))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
* selectors might be passed in inline or as a collection
*/
reagent_forms.core.extract_selectors = (function extract_selectors(selectors){if((cljs.core.ffirst.call(null,selectors) instanceof cljs.core.Keyword))
{return selectors;
} else
{return cljs.core.first.call(null,selectors);
}
});
reagent_forms.core.selection_group = (function selection_group(p__7183,p__7184){var vec__7190 = p__7183;var type = cljs.core.nth.call(null,vec__7190,(0),null);var map__7191 = cljs.core.nth.call(null,vec__7190,(1),null);var map__7191__$1 = ((cljs.core.seq_QMARK_.call(null,map__7191))?cljs.core.apply.call(null,cljs.core.hash_map,map__7191):map__7191);var attrs = map__7191__$1;var id = cljs.core.get.call(null,map__7191__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var field = cljs.core.get.call(null,map__7191__$1,new cljs.core.Keyword(null,"field","field",-1302436500));var selection_items = cljs.core.nthnext.call(null,vec__7190,(2));var map__7192 = p__7184;var map__7192__$1 = ((cljs.core.seq_QMARK_.call(null,map__7192))?cljs.core.apply.call(null,cljs.core.hash_map,map__7192):map__7192);var opts = map__7192__$1;var get = cljs.core.get.call(null,map__7192__$1,new cljs.core.Keyword(null,"get","get",1683182755));var selection_items__$1 = reagent_forms.core.extract_selectors.call(null,selection_items);var selections = reagent.core.atom.call(null,reagent_forms.core.mk_selections.call(null,id,selection_items__$1,opts));var selectors = cljs.core.map.call(null,((function (selection_items__$1,selections,vec__7190,type,map__7191,map__7191__$1,attrs,id,field,selection_items,map__7192,map__7192__$1,opts,get){
return (function (item){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,item)),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item.call(null,item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__7190,type,map__7191,map__7191__$1,attrs,id,field,selection_items,map__7192,map__7192__$1,opts,get))
,selection_items__$1);return ((function (selection_items__$1,selections,selectors,vec__7190,type,map__7191,map__7191__$1,attrs,id,field,selection_items,map__7192,map__7192__$1,opts,get){
return (function (){if(cljs.core.truth_(get.call(null,id)))
{} else
{cljs.core.swap_BANG_.call(null,selections,((function (selection_items__$1,selections,selectors,vec__7190,type,map__7191,map__7191__$1,attrs,id,field,selection_items,map__7192,map__7192__$1,opts,get){
return (function (p1__7181_SHARP_){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (selection_items__$1,selections,selectors,vec__7190,type,map__7191,map__7191__$1,attrs,id,field,selection_items,map__7192,map__7192__$1,opts,get){
return (function (p__7193){var vec__7194 = p__7193;var k = cljs.core.nth.call(null,vec__7194,(0),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__7190,type,map__7191,map__7191__$1,attrs,id,field,selection_items,map__7192,map__7192__$1,opts,get))
,p1__7181_SHARP_));
});})(selection_items__$1,selections,selectors,vec__7190,type,map__7191,map__7191__$1,attrs,id,field,selection_items,map__7192,map__7192__$1,opts,get))
);
}
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,cljs.core.doall.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.filter.call(null,((function (selection_items__$1,selections,selectors,vec__7190,type,map__7191,map__7191__$1,attrs,id,field,selection_items,map__7192,map__7192__$1,opts,get){
return (function (p1__7182_SHARP_){var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(p1__7182_SHARP_);if(cljs.core.truth_(temp__4124__auto__))
{var visible_QMARK_ = temp__4124__auto__;return visible_QMARK_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts)));
} else
{return true;
}
});})(selection_items__$1,selections,selectors,vec__7190,type,map__7191,map__7191__$1,attrs,id,field,selection_items,map__7192,map__7192__$1,opts,get))
,selectors)))], null);
});
;})(selection_items__$1,selections,selectors,vec__7190,type,map__7191,map__7191__$1,attrs,id,field,selection_items,map__7192,map__7192__$1,opts,get))
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"single-select","single-select",1327691774),(function (field,opts){return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
});
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),(function (field,opts){return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
});
}));
reagent_forms.core.map_options = (function map_options(options){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__3777__auto__ = (function iter__7207(s__7208){return (new cljs.core.LazySeq(null,(function (){var s__7208__$1 = s__7208;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7208__$1);if(temp__4126__auto__)
{var s__7208__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7208__$2))
{var c__3775__auto__ = cljs.core.chunk_first.call(null,s__7208__$2);var size__3776__auto__ = cljs.core.count.call(null,c__3775__auto__);var b__7210 = cljs.core.chunk_buffer.call(null,size__3776__auto__);if((function (){var i__7209 = (0);while(true){
if((i__7209 < size__3776__auto__))
{var vec__7215 = cljs.core._nth.call(null,c__3775__auto__,i__7209);var _ = cljs.core.nth.call(null,vec__7215,(0),null);var map__7216 = cljs.core.nth.call(null,vec__7215,(1),null);var map__7216__$1 = ((cljs.core.seq_QMARK_.call(null,map__7216))?cljs.core.apply.call(null,cljs.core.hash_map,map__7216):map__7216);var key = cljs.core.get.call(null,map__7216__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var label = cljs.core.nth.call(null,vec__7215,(2),null);cljs.core.chunk_append.call(null,b__7210,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)),key], null));
{
var G__7219 = (i__7209 + (1));
i__7209 = G__7219;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7210),iter__7207.call(null,cljs.core.chunk_rest.call(null,s__7208__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7210),null);
}
} else
{var vec__7217 = cljs.core.first.call(null,s__7208__$2);var _ = cljs.core.nth.call(null,vec__7217,(0),null);var map__7218 = cljs.core.nth.call(null,vec__7217,(1),null);var map__7218__$1 = ((cljs.core.seq_QMARK_.call(null,map__7218))?cljs.core.apply.call(null,cljs.core.hash_map,map__7218):map__7218);var key = cljs.core.get.call(null,map__7218__$1,new cljs.core.Keyword(null,"key","key",-1516042587));var label = cljs.core.nth.call(null,vec__7217,(2),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)),key], null),iter__7207.call(null,cljs.core.rest.call(null,s__7208__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3777__auto__.call(null,options);
})());
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"list","list",765357683),(function (p__7222,p__7223){var vec__7224 = p__7222;var type = cljs.core.nth.call(null,vec__7224,(0),null);var map__7225 = cljs.core.nth.call(null,vec__7224,(1),null);var map__7225__$1 = ((cljs.core.seq_QMARK_.call(null,map__7225))?cljs.core.apply.call(null,cljs.core.hash_map,map__7225):map__7225);var attrs = map__7225__$1;var id = cljs.core.get.call(null,map__7225__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var field = cljs.core.get.call(null,map__7225__$1,new cljs.core.Keyword(null,"field","field",-1302436500));var options = cljs.core.nthnext.call(null,vec__7224,(2));var map__7226 = p__7223;var map__7226__$1 = ((cljs.core.seq_QMARK_.call(null,map__7226))?cljs.core.apply.call(null,cljs.core.hash_map,map__7226):map__7226);var save_BANG_ = cljs.core.get.call(null,map__7226__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));var get = cljs.core.get.call(null,map__7226__$1,new cljs.core.Keyword(null,"get","get",1683182755));var doc = cljs.core.get.call(null,map__7226__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));var options__$1 = reagent_forms.core.extract_selectors.call(null,options);var options_lookup = reagent_forms.core.map_options.call(null,options__$1);var selection = reagent.core.atom.call(null,(function (){var or__3052__auto__ = get.call(null,id);if(cljs.core.truth_(or__3052__auto__))
{return or__3052__auto__;
} else
{return cljs.core.get_in.call(null,cljs.core.first.call(null,options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
}
})());save_BANG_.call(null,id,cljs.core.deref.call(null,selection));
return ((function (options__$1,options_lookup,selection,vec__7224,type,map__7225,map__7225__$1,attrs,id,field,options,map__7226,map__7226__$1,save_BANG_,get,doc){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),cljs.core.deref.call(null,selection),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (options__$1,options_lookup,selection,vec__7224,type,map__7225,map__7225__$1,attrs,id,field,options,map__7226,map__7226__$1,save_BANG_,get,doc){
return (function (p1__7220_SHARP_){return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__7220_SHARP_)));
});})(options__$1,options_lookup,selection,vec__7224,type,map__7225,map__7225__$1,attrs,id,field,options,map__7226,map__7226__$1,save_BANG_,get,doc))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (options__$1,options_lookup,selection,vec__7224,type,map__7225,map__7225__$1,attrs,id,field,options,map__7226,map__7226__$1,save_BANG_,get,doc){
return (function (p1__7221_SHARP_){var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__7221_SHARP_));if(cljs.core.truth_(temp__4124__auto__))
{var visible_QMARK_ = temp__4124__auto__;return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else
{return true;
}
});})(options__$1,options_lookup,selection,vec__7224,type,map__7225,map__7225__$1,attrs,id,field,options,map__7226,map__7226__$1,save_BANG_,get,doc))
,options__$1))], null);
});
;})(options__$1,options_lookup,selection,vec__7224,type,map__7225,map__7225__$1,attrs,id,field,options,map__7226,map__7226__$1,save_BANG_,get,doc))
}));
reagent_forms.core.field_QMARK_ = (function field_QMARK_(node){return (cljs.core.coll_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,node))) && (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,node),new cljs.core.Keyword(null,"field","field",-1302436500)));
});
/**
* creates data bindings between the form fields and the supplied atom
* form - the form template with the fields
* doc - the document that the fields will be bound to
* events - any events that should be triggered when the document state changes
* @param {...*} var_args
*/
reagent_forms.core.bind_fields = (function() { 
var bind_fields__delegate = function (form,doc,events){var opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (p1__7227_SHARP_){return cljs.core.get_in.call(null,cljs.core.deref.call(null,doc),reagent_forms.core.id__GT_path.call(null,p1__7227_SHARP_));
}),new cljs.core.Keyword(null,"save!","save!",-1137373803),reagent_forms.core.mk_save_fn.call(null,doc,events)], null);var form__$1 = clojure.walk.postwalk.call(null,((function (opts){
return (function (node){if(reagent_forms.core.field_QMARK_.call(null,node))
{var field = reagent_forms.core.init_field.call(null,node,opts);if(cljs.core.fn_QMARK_.call(null,field))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else
{return field;
}
} else
{return node;
}
});})(opts))
,form);return ((function (opts,form__$1){
return (function (){return form__$1;
});
;})(opts,form__$1))
};
var bind_fields = function (form,doc,var_args){
var events = null;if (arguments.length > 2) {
  events = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return bind_fields__delegate.call(this,form,doc,events);};
bind_fields.cljs$lang$maxFixedArity = 2;
bind_fields.cljs$lang$applyTo = (function (arglist__7228){
var form = cljs.core.first(arglist__7228);
arglist__7228 = cljs.core.next(arglist__7228);
var doc = cljs.core.first(arglist__7228);
var events = cljs.core.rest(arglist__7228);
return bind_fields__delegate(form,doc,events);
});
bind_fields.cljs$core$IFn$_invoke$arity$variadic = bind_fields__delegate;
return bind_fields;
})()
;

//# sourceMappingURL=core.js.map