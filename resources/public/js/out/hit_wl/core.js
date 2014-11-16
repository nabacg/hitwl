// Compiled by ClojureScript 0.0-2311
goog.provide('hit_wl.core');
goog.require('cljs.core');
goog.require('json_html.core');
goog.require('reagent_forms.core');
goog.require('reagent_forms.datepicker');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('clojure.browser.repl');
goog.require('reagent_forms.core');
goog.require('reagent_forms.datepicker');
goog.require('cljs_time.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('json_html.core');
goog.require('cljs_time.coerce');
goog.require('clojure.browser.repl');
cljs.core.enable_console_print_BANG_.call(null);
hit_wl.core.is_dev_QMARK_ = (document.URL.search("localhost") > (-1));
if(cljs.core.truth_(hit_wl.core.is_dev_QMARK_))
{clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
} else
{}
hit_wl.core.console_log = (function console_log(item){return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)));
});
hit_wl.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"edited-workout","edited-workout",-1915720068),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"excercises","excercises",2118787769),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"current-view","current-view",-1037279042),new cljs.core.Keyword(null,"main-user-panel","main-user-panel",524239088),new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false], null));
hit_wl.core.save_state = (function save_state(){return ajax.core.POST.call(null,"/user/save",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.deref.call(null,hit_wl.core.state),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (_){return cljs.core.swap_BANG_.call(null,hit_wl.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),true);
})], null));
});
hit_wl.core.get_userdata = (function get_userdata(){return ajax.core.GET.call(null,"/user/data",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p__8674){var map__8675 = p__8674;var map__8675__$1 = ((cljs.core.seq_QMARK_.call(null,map__8675))?cljs.core.apply.call(null,cljs.core.hash_map,map__8675):map__8675);var username = cljs.core.get.call(null,map__8675__$1,"username");var workouts = cljs.core.get.call(null,map__8675__$1,"workouts");return cljs.core.swap_BANG_.call(null,hit_wl.core.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"workouts","workouts",1343445337),workouts], null));
})], null));
});
hit_wl.core.set_value_BANG_ = (function set_value_BANG_(state_atom,key,value){cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"saved?","saved?",-2027163192),false);
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc_in,key,value);
});
hit_wl.core.get_value = (function get_value(state_map,key){return cljs.core.get_in.call(null,state_map,key);
});
/**
* @param {...*} var_args
*/
hit_wl.core.row = (function() { 
var row__delegate = function (label,body){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-3","div.col-md-3",1386112129),body], null)], null);
};
var row = function (label,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return row__delegate.call(this,label,body);};
row.cljs$lang$maxFixedArity = 1;
row.cljs$lang$applyTo = (function (arglist__8676){
var label = cljs.core.first(arglist__8676);
var body = cljs.core.rest(arglist__8676);
return row__delegate(label,body);
});
row.cljs$core$IFn$_invoke$arity$variadic = row__delegate;
return row;
})()
;
hit_wl.core.text_input = (function text_input(state_atom,id,label){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hit_wl.core.row,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"form-control","form-control",165407042),new cljs.core.Keyword(null,"value","value",305978217),hit_wl.core.get_value.call(null,cljs.core.deref.call(null,state_atom),id),new cljs.core.Keyword(null,"onChange","onChange",-312891301),(function (p1__8677_SHARP_){return hit_wl.core.set_value_BANG_.call(null,state_atom,id,p1__8677_SHARP_.target.value);
})], null)], null)], null);
});
hit_wl.core.list_item = (function list_item(state_atom,id,k,v,states){var handle_click_BANG_ = (function handle_click_BANG_(){cljs.core.swap_BANG_.call(null,cljs.core.get.call(null,states,k),cljs.core.not);
return hit_wl.core.set_value_BANG_.call(null,state_atom,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p__8692){var vec__8693 = p__8692;var k__$1 = cljs.core.nth.call(null,vec__8693,(0),null);var v__$1 = cljs.core.nth.call(null,vec__8693,(1),null);return cljs.core.deref.call(null,v__$1);
}),states)));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),("list-group-item"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref.call(null,cljs.core.get.call(null,states,k)))?" active":null))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_click_BANG_], null),v], null);
});
/**
* @param {...*} var_args
*/
hit_wl.core.selection_list = (function() { 
var selection_list__delegate = function (state_atom,id,label,items){var states = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8704){var vec__8705 = p__8704;var k = cljs.core.nth.call(null,vec__8705,(0),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,reagent.core.atom.call(null,false)], null);
}),items));return ((function (states){
return (function (){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hit_wl.core.row,label,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),(function (){var iter__3777__auto__ = ((function (states){
return (function iter__8706(s__8707){return (new cljs.core.LazySeq(null,((function (states){
return (function (){var s__8707__$1 = s__8707;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8707__$1);if(temp__4126__auto__)
{var s__8707__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8707__$2))
{var c__3775__auto__ = cljs.core.chunk_first.call(null,s__8707__$2);var size__3776__auto__ = cljs.core.count.call(null,c__3775__auto__);var b__8709 = cljs.core.chunk_buffer.call(null,size__3776__auto__);if((function (){var i__8708 = (0);while(true){
if((i__8708 < size__3776__auto__))
{var vec__8712 = cljs.core._nth.call(null,c__3775__auto__,i__8708);var k = cljs.core.nth.call(null,vec__8712,(0),null);var v = cljs.core.nth.call(null,vec__8712,(1),null);cljs.core.chunk_append.call(null,b__8709,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [hit_wl.core.list_item,state_atom,id,k,v,states], null));
{
var G__8714 = (i__8708 + (1));
i__8708 = G__8714;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8709),iter__8706.call(null,cljs.core.chunk_rest.call(null,s__8707__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8709),null);
}
} else
{var vec__8713 = cljs.core.first.call(null,s__8707__$2);var k = cljs.core.nth.call(null,vec__8713,(0),null);var v = cljs.core.nth.call(null,vec__8713,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [hit_wl.core.list_item,state_atom,id,k,v,states], null),iter__8706.call(null,cljs.core.rest.call(null,s__8707__$2)));
}
} else
{return null;
}
break;
}
});})(states))
,null,null));
});})(states))
;return iter__3777__auto__.call(null,items);
})()], null)], null);
});
;})(states))
};
var selection_list = function (state_atom,id,label,var_args){
var items = null;if (arguments.length > 3) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return selection_list__delegate.call(this,state_atom,id,label,items);};
selection_list.cljs$lang$maxFixedArity = 3;
selection_list.cljs$lang$applyTo = (function (arglist__8715){
var state_atom = cljs.core.first(arglist__8715);
arglist__8715 = cljs.core.next(arglist__8715);
var id = cljs.core.first(arglist__8715);
arglist__8715 = cljs.core.next(arglist__8715);
var label = cljs.core.first(arglist__8715);
var items = cljs.core.rest(arglist__8715);
return selection_list__delegate(state_atom,id,label,items);
});
selection_list.cljs$core$IFn$_invoke$arity$variadic = selection_list__delegate;
return selection_list;
})()
;
hit_wl.core.list_items = (function list_items(lst){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),(function (){var iter__3777__auto__ = (function iter__8720(s__8721){return (new cljs.core.LazySeq(null,(function (){var s__8721__$1 = s__8721;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8721__$1);if(temp__4126__auto__)
{var s__8721__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8721__$2))
{var c__3775__auto__ = cljs.core.chunk_first.call(null,s__8721__$2);var size__3776__auto__ = cljs.core.count.call(null,c__3775__auto__);var b__8723 = cljs.core.chunk_buffer.call(null,size__3776__auto__);if((function (){var i__8722 = (0);while(true){
if((i__8722 < size__3776__auto__))
{var i = cljs.core._nth.call(null,c__3775__auto__,i__8722);cljs.core.chunk_append.call(null,b__8723,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)),null], null));
{
var G__8724 = (i__8722 + (1));
i__8722 = G__8724;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8723),iter__8720.call(null,cljs.core.chunk_rest.call(null,s__8721__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8723),null);
}
} else
{var i = cljs.core.first.call(null,s__8721__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)),null], null),iter__8720.call(null,cljs.core.rest.call(null,s__8721__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3777__auto__.call(null,lst);
})()], null);
});
hit_wl.core.table_row = (function table_row(headers,row){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__3777__auto__ = (function iter__8729(s__8730){return (new cljs.core.LazySeq(null,(function (){var s__8730__$1 = s__8730;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8730__$1);if(temp__4126__auto__)
{var s__8730__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8730__$2))
{var c__3775__auto__ = cljs.core.chunk_first.call(null,s__8730__$2);var size__3776__auto__ = cljs.core.count.call(null,c__3775__auto__);var b__8732 = cljs.core.chunk_buffer.call(null,size__3776__auto__);if((function (){var i__8731 = (0);while(true){
if((i__8731 < size__3776__auto__))
{var h = cljs.core._nth.call(null,c__3775__auto__,i__8731);cljs.core.chunk_append.call(null,b__8732,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core.coll_QMARK_.call(null,row.call(null,h)))?hit_wl.core.list_items.call(null,row.call(null,h)):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row.call(null,h))))], null));
{
var G__8733 = (i__8731 + (1));
i__8731 = G__8733;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8732),iter__8729.call(null,cljs.core.chunk_rest.call(null,s__8730__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8732),null);
}
} else
{var h = cljs.core.first.call(null,s__8730__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),((cljs.core.coll_QMARK_.call(null,row.call(null,h)))?hit_wl.core.list_items.call(null,row.call(null,h)):(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(row.call(null,h))))], null),iter__8729.call(null,cljs.core.rest.call(null,s__8730__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3777__auto__.call(null,headers);
})()], null);
});
hit_wl.core.draw_table = (function draw_table(data){var headers = cljs.core.keys.call(null,cljs.core.first.call(null,data));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-hover.table-bordered","table.table.table-hover.table-bordered",-1562803801),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__3777__auto__ = ((function (headers){
return (function iter__8742(s__8743){return (new cljs.core.LazySeq(null,((function (headers){
return (function (){var s__8743__$1 = s__8743;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8743__$1);if(temp__4126__auto__)
{var s__8743__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8743__$2))
{var c__3775__auto__ = cljs.core.chunk_first.call(null,s__8743__$2);var size__3776__auto__ = cljs.core.count.call(null,c__3775__auto__);var b__8745 = cljs.core.chunk_buffer.call(null,size__3776__auto__);if((function (){var i__8744 = (0);while(true){
if((i__8744 < size__3776__auto__))
{var header = cljs.core._nth.call(null,c__3775__auto__,i__8744);cljs.core.chunk_append.call(null,b__8745,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),header], null));
{
var G__8750 = (i__8744 + (1));
i__8744 = G__8750;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8745),iter__8742.call(null,cljs.core.chunk_rest.call(null,s__8743__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8745),null);
}
} else
{var header = cljs.core.first.call(null,s__8743__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),header], null),iter__8742.call(null,cljs.core.rest.call(null,s__8743__$2)));
}
} else
{return null;
}
break;
}
});})(headers))
,null,null));
});})(headers))
;return iter__3777__auto__.call(null,headers);
})()], null),(function (){var iter__3777__auto__ = ((function (headers){
return (function iter__8746(s__8747){return (new cljs.core.LazySeq(null,((function (headers){
return (function (){var s__8747__$1 = s__8747;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8747__$1);if(temp__4126__auto__)
{var s__8747__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8747__$2))
{var c__3775__auto__ = cljs.core.chunk_first.call(null,s__8747__$2);var size__3776__auto__ = cljs.core.count.call(null,c__3775__auto__);var b__8749 = cljs.core.chunk_buffer.call(null,size__3776__auto__);if((function (){var i__8748 = (0);while(true){
if((i__8748 < size__3776__auto__))
{var row = cljs.core._nth.call(null,c__3775__auto__,i__8748);cljs.core.chunk_append.call(null,b__8749,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hit_wl.core.table_row,headers,row], null));
{
var G__8751 = (i__8748 + (1));
i__8748 = G__8751;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8749),iter__8746.call(null,cljs.core.chunk_rest.call(null,s__8747__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8749),null);
}
} else
{var row = cljs.core.first.call(null,s__8747__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hit_wl.core.table_row,headers,row], null),iter__8746.call(null,cljs.core.rest.call(null,s__8747__$2)));
}
} else
{return null;
}
break;
}
});})(headers))
,null,null));
});})(headers))
;return iter__3777__auto__.call(null,data);
})()], null)], null);
});
hit_wl.core.get_current_date_map = (function get_current_date_map(){var now = cljs_time.core.now.call(null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),cljs_time.core.year.call(null,now),new cljs.core.Keyword(null,"month","month",-1960248533),cljs_time.core.month.call(null,now),new cljs.core.Keyword(null,"day","day",-274800446),cljs_time.core.day.call(null,now)], null);
});
hit_wl.core.open_add_edit_workout = (function open_add_edit_workout(){hit_wl.core.console_log.call(null,cljs_time.core.today.call(null));
hit_wl.core.console_log.call(null,cljs_time.core.date_time.call(null,(2014),(11),(12)));
return cljs.core.swap_BANG_.call(null,hit_wl.core.state,(function (p1__8752_SHARP_){return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,p1__8752_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edited-workout","edited-workout",-1915720068),new cljs.core.Keyword(null,"date","date",-1463434462)], null),hit_wl.core.get_current_date_map.call(null)),new cljs.core.Keyword(null,"current-view","current-view",-1037279042),new cljs.core.Keyword(null,"add-workout-panel","add-workout-panel",325371773));
}));
});
hit_wl.core.main_user_panel = (function main_user_panel(state_dict){return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"HIT Workout Logger"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [hit_wl.core.row,"Username",new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(state_dict)], null),((cljs.core.not.call(null,new cljs.core.Keyword(null,"add-edit-workout-open?","add-edit-workout-open?",274765417).cljs$core$IFn$_invoke$arity$1(state_dict)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-lg.btn-primary","button.btn.btn-lg.btn-primary",-296684603),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),hit_wl.core.open_add_edit_workout], null),"Add Workout"], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Workouts"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hit_wl.core.draw_table,new cljs.core.Keyword(null,"workouts","workouts",1343445337).cljs$core$IFn$_invoke$arity$1(state_dict)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"saved?","saved?",-2027163192).cljs$core$IFn$_invoke$arity$1(state_dict))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Saved"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-lg.btn-primary","button.btn.btn-lg.btn-primary",-296684603),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),hit_wl.core.save_state], null),"Submit"], null))], null);
});
hit_wl.core.append_new_workout = (function append_new_workout(old_state){var new_workouts = cljs.core.conj.call(null,new cljs.core.Keyword(null,"workouts","workouts",1343445337).cljs$core$IFn$_invoke$arity$1(old_state),cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-new?","is-new?",426506766),true], null),cljs.core.map.call(null,(function (p__8755){var vec__8756 = p__8755;var k = cljs.core.nth.call(null,vec__8756,(0),null);var v = cljs.core.nth.call(null,vec__8756,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))], null);
}),new cljs.core.Keyword(null,"edited-workout","edited-workout",-1915720068).cljs$core$IFn$_invoke$arity$1(old_state))));return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,old_state,new cljs.core.Keyword(null,"workouts","workouts",1343445337),new_workouts),new cljs.core.Keyword(null,"edited-workout","edited-workout",-1915720068),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"current-view","current-view",-1037279042),new cljs.core.Keyword(null,"main-user-panel","main-user-panel",524239088));
});
hit_wl.core.append_new_excercise = (function append_new_excercise(old_state){if(cljs.core.seq.call(null,cljs.core.get_in.call(null,old_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edited-workout","edited-workout",-1915720068),new cljs.core.Keyword(null,"new","new",-2085437848)], null))))
{return cljs.core.update_in.call(null,cljs.core.update_in.call(null,old_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edited-workout","edited-workout",-1915720068),new cljs.core.Keyword(null,"excercises","excercises",2118787769)], null),cljs.core.conj,cljs.core.dissoc.call(null,cljs.core.get_in.call(null,old_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edited-workout","edited-workout",-1915720068),new cljs.core.Keyword(null,"new","new",-2085437848)], null)),new cljs.core.Keyword(null,"start-TUL","start-TUL",-44472158))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edited-workout","edited-workout",-1915720068),new cljs.core.Keyword(null,"new","new",-2085437848)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"excercises","excercises",2118787769),cljs.core.PersistentVector.EMPTY], null));
} else
{return old_state;
}
});
hit_wl.core.draw_excercise_panel = (function draw_excercise_panel(){var iter__3777__auto__ = (function iter__8761(s__8762){return (new cljs.core.LazySeq(null,(function (){var s__8762__$1 = s__8762;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8762__$1);if(temp__4126__auto__)
{var s__8762__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8762__$2))
{var c__3775__auto__ = cljs.core.chunk_first.call(null,s__8762__$2);var size__3776__auto__ = cljs.core.count.call(null,c__3775__auto__);var b__8764 = cljs.core.chunk_buffer.call(null,size__3776__auto__);if((function (){var i__8763 = (0);while(true){
if((i__8763 < size__3776__auto__))
{var e = cljs.core._nth.call(null,c__3775__auto__,i__8763);cljs.core.chunk_append.call(null,b__8764,hit_wl.core.row.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"edited-workout.excercises","edited-workout.excercises",86885931))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)))], null)], null)));
{
var G__8765 = (i__8763 + (1));
i__8763 = G__8765;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8764),iter__8761.call(null,cljs.core.chunk_rest.call(null,s__8762__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8764),null);
}
} else
{var e = cljs.core.first.call(null,s__8762__$2);return cljs.core.cons.call(null,hit_wl.core.row.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keyword.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"edited-workout.excercises","edited-workout.excercises",86885931))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)))], null)], null)),iter__8761.call(null,cljs.core.rest.call(null,s__8762__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3777__auto__.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,hit_wl.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edited-workout","edited-workout",-1915720068),new cljs.core.Keyword(null,"excercises","excercises",2118787769)], null)));
});
hit_wl.core.add_excercise_form = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Add Exercise"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"single-select","single-select",1327691774),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"edited-workout.new.exercise-type","edited-workout.new.exercise-type",-922788963)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"leg-press","leg-press",367155404)], null),"Leg Press"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"chest-press","chest-press",-1374026633)], null),"Chest Press"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"shoulder-press","shoulder-press",-2087178470)], null),"Shoulder Press"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"pull-down","pull-down",-1466236357)], null),"Pull Down"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"pull-back","pull-back",-1752613669)], null),"Pull back"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8","div.col-md-8",754224778),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-1","div.col-md-1",45581582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Reps"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-1","div.col-md-1",45581582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"edited-workout.new.reps","edited-workout.new.reps",-17784580)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-1","div.col-md-1",45581582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"TUL"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-1","div.col-md-1",45581582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"edited-workout.new.TUL","edited-workout.new.TUL",1948218666)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-1","div.col-md-1",45581582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Technique"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-control","select.form-control",696610397),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"edited-workout.new.technique","edited-workout.new.technique",-1748919296)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"super-slow","super-slow",1971335363)], null),"Super Slow"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"rest-pause","rest-pause",-1059125543)], null),"Rest Pause"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"standard","standard",-1769206695)], null),"Standard"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-1","div.col-md-1",45581582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Notes"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"edited-workout.new.comments","edited-workout.new.comments",2086174954)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4","div.col-md-4",864652098),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){var new_item = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8766){var vec__8767 = p__8766;var k = cljs.core.nth.call(null,vec__8767,(0),null);var v = cljs.core.nth.call(null,vec__8767,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))], null);
}),cljs.core.get_in.call(null,cljs.core.deref.call(null,hit_wl.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edited-workout","edited-workout",-1915720068),new cljs.core.Keyword(null,"new","new",-2085437848)], null))));var new_list = cljs.core.conj.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,hit_wl.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edited-workout","edited-workout",-1915720068),new cljs.core.Keyword(null,"excercises","excercises",2118787769)], null)),new_item);cljs.core.swap_BANG_.call(null,hit_wl.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edited-workout","edited-workout",-1915720068),new cljs.core.Keyword(null,"excercises","excercises",2118787769)], null),cljs.core.conj,new_item);
hit_wl.core.console_log.call(null,new_list);
hit_wl.core.console_log.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,hit_wl.core.state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edited-workout","edited-workout",-1915720068)], null)));
return cljs.core.swap_BANG_.call(null,hit_wl.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edited-workout","edited-workout",-1915720068),new cljs.core.Keyword(null,"new","new",-2085437848)], null),null);
})], null),"Add"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.col-md-4","button.col-md-4",-1986214845),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),hit_wl.core.append_new_workout], null),"Save"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.col-md-4","button.col-md-4",-1986214845),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){return cljs.core.swap_BANG_.call(null,hit_wl.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-edit-workout-open?","add-edit-workout-open?",274765417)], null),cljs.core.not);
})], null),"Cancel"], null)], null)], null);
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"pick an option"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-control","select.form-control",696610397),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"edited-workout.excercise-type","edited-workout.excercise-type",-1963346111)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"leg-press","leg-press",367155404)], null),"Leg Press"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"chest-press","chest-press",-1374026633)], null),"Chest Press"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"shoulder-press","shoulder-press",-2087178470)], null),"Shoulder Press"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"pull-down","pull-down",-1466236357)], null),"Pull Down"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"pull-back","pull-back",-1752613669)], null),"Pull back"], null)], null)], null);
hit_wl.core.edit_workout_template = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Add new workout"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Date"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"datepicker","datepicker",821741450),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"edited-workout.date","edited-workout.date",1526745387)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Notes"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.span6","textarea.span6",-575354135),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"edited-workout.comments","edited-workout.comments",479324988)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-block","button.btn.btn-block",-264196707),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){return cljs.core.swap_BANG_.call(null,hit_wl.core.state,(function (old_state){return cljs.core.assoc.call(null,cljs.core.assoc.call(null,old_state,new cljs.core.Keyword(null,"current-view","current-view",-1037279042),new cljs.core.Keyword(null,"main-user-panel","main-user-panel",524239088)),new cljs.core.Keyword(null,"edited-workout","edited-workout",-1915720068),cljs.core.PersistentArrayMap.EMPTY);
}));
})], null),"Cancel"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-block.btn-primary","button.btn.btn-block.btn-primary",-803304431),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){return cljs.core.swap_BANG_.call(null,hit_wl.core.state,(function (old_state){return cljs.core.update_in.call(null,cljs.core.assoc.call(null,old_state,new cljs.core.Keyword(null,"current-view","current-view",-1037279042),new cljs.core.Keyword(null,"add-excercise-panel","add-excercise-panel",2018554920)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edited-workout","edited-workout",-1915720068),new cljs.core.Keyword(null,"new","new",-2085437848)], null),cljs.core.PersistentArrayMap.EMPTY);
}));
})], null),"Add Excercise"], null)], null)], null)], null);
hit_wl.core.draw_list_group = (function() {
var draw_list_group = null;
var draw_list_group__2 = (function (id,options){return draw_list_group.call(null,id,options,new cljs.core.Keyword(null,"single-select","single-select",1327691774));
});
var draw_list_group__3 = (function (id,options,select_type){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),select_type,new cljs.core.Keyword(null,"id","id",-1388402092),id], null),(function (){var iter__3777__auto__ = (function iter__8776(s__8777){return (new cljs.core.LazySeq(null,(function (){var s__8777__$1 = s__8777;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8777__$1);if(temp__4126__auto__)
{var s__8777__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8777__$2))
{var c__3775__auto__ = cljs.core.chunk_first.call(null,s__8777__$2);var size__3776__auto__ = cljs.core.count.call(null,c__3775__auto__);var b__8779 = cljs.core.chunk_buffer.call(null,size__3776__auto__);if((function (){var i__8778 = (0);while(true){
if((i__8778 < size__3776__auto__))
{var vec__8782 = cljs.core._nth.call(null,c__3775__auto__,i__8778);var k = cljs.core.nth.call(null,vec__8782,(0),null);var v = cljs.core.nth.call(null,vec__8782,(1),null);cljs.core.chunk_append.call(null,b__8779,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),v], null));
{
var G__8784 = (i__8778 + (1));
i__8778 = G__8784;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8779),iter__8776.call(null,cljs.core.chunk_rest.call(null,s__8777__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8779),null);
}
} else
{var vec__8783 = cljs.core.first.call(null,s__8777__$2);var k = cljs.core.nth.call(null,vec__8783,(0),null);var v = cljs.core.nth.call(null,vec__8783,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),v], null),iter__8776.call(null,cljs.core.rest.call(null,s__8777__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3777__auto__.call(null,options);
})()], null);
});
draw_list_group = function(id,options,select_type){
switch(arguments.length){
case 2:
return draw_list_group__2.call(this,id,options);
case 3:
return draw_list_group__3.call(this,id,options,select_type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_list_group.cljs$core$IFn$_invoke$arity$2 = draw_list_group__2;
draw_list_group.cljs$core$IFn$_invoke$arity$3 = draw_list_group__3;
return draw_list_group;
})()
;
hit_wl.core.draw_button_list = (function() {
var draw_button_list = null;
var draw_button_list__2 = (function (id,options){return draw_button_list.call(null,id,options,new cljs.core.Keyword(null,"single-select","single-select",1327691774));
});
var draw_button_list__3 = (function (id,options,select_type){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group","div.btn-group",1563487258),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),select_type,new cljs.core.Keyword(null,"id","id",-1388402092),id], null),(function (){var iter__3777__auto__ = (function iter__8793(s__8794){return (new cljs.core.LazySeq(null,(function (){var s__8794__$1 = s__8794;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8794__$1);if(temp__4126__auto__)
{var s__8794__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8794__$2))
{var c__3775__auto__ = cljs.core.chunk_first.call(null,s__8794__$2);var size__3776__auto__ = cljs.core.count.call(null,c__3775__auto__);var b__8796 = cljs.core.chunk_buffer.call(null,size__3776__auto__);if((function (){var i__8795 = (0);while(true){
if((i__8795 < size__3776__auto__))
{var vec__8799 = cljs.core._nth.call(null,c__3775__auto__,i__8795);var k = cljs.core.nth.call(null,vec__8799,(0),null);var v = cljs.core.nth.call(null,vec__8799,(1),null);cljs.core.chunk_append.call(null,b__8796,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),v], null));
{
var G__8801 = (i__8795 + (1));
i__8795 = G__8801;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8796),iter__8793.call(null,cljs.core.chunk_rest.call(null,s__8794__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8796),null);
}
} else
{var vec__8800 = cljs.core.first.call(null,s__8794__$2);var k = cljs.core.nth.call(null,vec__8800,(0),null);var v = cljs.core.nth.call(null,vec__8800,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),v], null),iter__8793.call(null,cljs.core.rest.call(null,s__8794__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3777__auto__.call(null,options);
})()], null);
});
draw_button_list = function(id,options,select_type){
switch(arguments.length){
case 2:
return draw_button_list__2.call(this,id,options);
case 3:
return draw_button_list__3.call(this,id,options,select_type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_button_list.cljs$core$IFn$_invoke$arity$2 = draw_button_list__2;
draw_button_list.cljs$core$IFn$_invoke$arity$3 = draw_button_list__3;
return draw_button_list;
})()
;
hit_wl.core.draw_dropdown = (function draw_dropdown(id,options){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-control","select.form-control",696610397),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"id","id",-1388402092),id], null),(function (){var iter__3777__auto__ = (function iter__8810(s__8811){return (new cljs.core.LazySeq(null,(function (){var s__8811__$1 = s__8811;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8811__$1);if(temp__4126__auto__)
{var s__8811__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8811__$2))
{var c__3775__auto__ = cljs.core.chunk_first.call(null,s__8811__$2);var size__3776__auto__ = cljs.core.count.call(null,c__3775__auto__);var b__8813 = cljs.core.chunk_buffer.call(null,size__3776__auto__);if((function (){var i__8812 = (0);while(true){
if((i__8812 < size__3776__auto__))
{var vec__8816 = cljs.core._nth.call(null,c__3775__auto__,i__8812);var k = cljs.core.nth.call(null,vec__8816,(0),null);var v = cljs.core.nth.call(null,vec__8816,(1),null);cljs.core.chunk_append.call(null,b__8813,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.keyword.call(null,k)], null),v], null));
{
var G__8818 = (i__8812 + (1));
i__8812 = G__8818;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8813),iter__8810.call(null,cljs.core.chunk_rest.call(null,s__8811__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8813),null);
}
} else
{var vec__8817 = cljs.core.first.call(null,s__8811__$2);var k = cljs.core.nth.call(null,vec__8817,(0),null);var v = cljs.core.nth.call(null,vec__8817,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.keyword.call(null,k)], null),v], null),iter__8810.call(null,cljs.core.rest.call(null,s__8811__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3777__auto__.call(null,options);
})()], null);
});
hit_wl.core.add_excercise_template = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"New Excercise"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Type"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-8","div.col-md-8",754224778),hit_wl.core.draw_button_list.call(null,new cljs.core.Keyword(null,"edited-workout.new.exercise-type","edited-workout.new.exercise-type",-922788963),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leg-press","leg-press",367155404),"Leg Press"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chest-press","chest-press",-1374026633),"Chest Press"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shoulder-press","shoulder-press",-2087178470),"Shoulder Press"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull-down","pull-down",-1466236357),"Pull Down"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull-back","pull-back",-1752613669),"Pull Back"], null)], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Weight"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4","div.col-md-4",864652098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"edited-workout.new.weight","edited-workout.new.weight",-50954806)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"TUL"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4","div.col-md-4",864652098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"edited-workout.new.TUL","edited-workout.new.TUL",1948218666)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-lg","button.btn.btn-lg",-1480999517),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){return cljs.core.swap_BANG_.call(null,hit_wl.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edited-workout","edited-workout",-1915720068),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"start-TUL","start-TUL",-44472158)], null),cljs_time.coerce.to_long.call(null,cljs_time.core.time_now.call(null)));
})], null),"START!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-lg","button.btn.btn-lg",-1480999517),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){return cljs.core.swap_BANG_.call(null,hit_wl.core.state,(function (old_state){var end_TUL = cljs_time.core.time_now.call(null);var start_TUL = cljs.core.get_in.call(null,old_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edited-workout","edited-workout",-1915720068),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"start-TUL","start-TUL",-44472158)], null));var diff = (cljs_time.coerce.to_long.call(null,end_TUL) - start_TUL);return cljs.core.assoc_in.call(null,old_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edited-workout","edited-workout",-1915720068),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"TUL","TUL",764770520)], null),(diff / (1000)));
}));
})], null),"END"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Reps"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-7","div.col-md-7",-21738748),hit_wl.core.draw_button_list.call(null,new cljs.core.Keyword(null,"edited-workout.new.reps","edited-workout.new.reps",-17784580),(function (){var iter__3777__auto__ = (function iter__8819(s__8820){return (new cljs.core.LazySeq(null,(function (){var s__8820__$1 = s__8820;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8820__$1);if(temp__4126__auto__)
{var s__8820__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8820__$2))
{var c__3775__auto__ = cljs.core.chunk_first.call(null,s__8820__$2);var size__3776__auto__ = cljs.core.count.call(null,c__3775__auto__);var b__8822 = cljs.core.chunk_buffer.call(null,size__3776__auto__);if((function (){var i__8821 = (0);while(true){
if((i__8821 < size__3776__auto__))
{var i = cljs.core._nth.call(null,c__3775__auto__,i__8821);cljs.core.chunk_append.call(null,b__8822,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,i),i], null));
{
var G__8823 = (i__8821 + (1));
i__8821 = G__8823;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8822),iter__8819.call(null,cljs.core.chunk_rest.call(null,s__8820__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8822),null);
}
} else
{var i = cljs.core.first.call(null,s__8820__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,i),i], null),iter__8819.call(null,cljs.core.rest.call(null,s__8820__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3777__auto__.call(null,cljs.core.map.call(null,cljs.core.str,cljs.core.range.call(null,(3),(20))));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-1","div.col-md-1",45581582),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"edited-workout.new.reps","edited-workout.new.reps",-17784580)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Technique"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4","div.col-md-4",864652098),hit_wl.core.draw_button_list.call(null,new cljs.core.Keyword(null,"edited-workout.new.technique","edited-workout.new.technique",-1748919296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"super-slow","super-slow",1971335363),"Super Slow"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rest-pause","rest-pause",-1059125543),"Rest Pause"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"standard","standard",-1769206695),"Standard"], null)], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-2","div.col-md-2",-138798418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Notes"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4","div.col-md-4",864652098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"edited-workout.new.comments","edited-workout.new.comments",2086174954)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4","div.col-md-4",864652098),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-block","button.btn.btn-block",-264196707),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){return cljs.core.swap_BANG_.call(null,hit_wl.core.state,(function (old_state){return cljs.core.assoc.call(null,cljs.core.assoc.call(null,old_state,new cljs.core.Keyword(null,"current-view","current-view",-1037279042),new cljs.core.Keyword(null,"main-user-panel","main-user-panel",524239088)),new cljs.core.Keyword(null,"edited-workout","edited-workout",-1915720068),cljs.core.PersistentArrayMap.EMPTY);
}));
})], null),"Cancel"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4","div.col-md-4",864652098),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-block.btn-primary","button.btn.btn-block.btn-primary",-803304431),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){return cljs.core.swap_BANG_.call(null,hit_wl.core.state,(function (old_state){return hit_wl.core.append_new_excercise.call(null,cljs.core.assoc.call(null,old_state,new cljs.core.Keyword(null,"current-view","current-view",-1037279042),new cljs.core.Keyword(null,"add-excercise-panel","add-excercise-panel",2018554920)));
}));
})], null),"Add Another Excercise"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-4","div.col-md-4",864652098),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-block","button.btn.btn-block",-264196707),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){return cljs.core.swap_BANG_.call(null,hit_wl.core.state,(function (old_state){return hit_wl.core.append_new_workout.call(null,hit_wl.core.append_new_excercise.call(null,old_state));
}));
})], null),"Finish & Save"], null)], null)], null)], null);
hit_wl.core.home = (function home(){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current-view","current-view",-1037279042).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hit_wl.core.state)),new cljs.core.Keyword(null,"main-user-panel","main-user-panel",524239088)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hit_wl.core.main_user_panel,cljs.core.deref.call(null,hit_wl.core.state)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163)," "], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current-view","current-view",-1037279042).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hit_wl.core.state)),new cljs.core.Keyword(null,"add-excercise-panel","add-excercise-panel",2018554920)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,hit_wl.core.add_excercise_template,hit_wl.core.state], null):null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"current-view","current-view",-1037279042).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hit_wl.core.state)),new cljs.core.Keyword(null,"add-workout-panel","add-workout-panel",325371773)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,hit_wl.core.edit_workout_template,hit_wl.core.state], null):null)], null),null,(cljs.core.truth_(hit_wl.core.is_dev_QMARK_)?(function (){new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null);
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"State"], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [json_html.core.edn__GT_hiccup,cljs.core.deref.call(null,hit_wl.core.state)], null);
})():null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hit_wl.core.home], null),document.getElementById("content"));
hit_wl.core.get_userdata.call(null);

//# sourceMappingURL=core.js.map