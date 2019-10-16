
  

# ng-fy-tabs

  

Hey. 
It's an Angular 8 module for Material Admin Panel Bar Theme.
Have Funn.

[Click for demo](https://Fyrok1.github.io/ng-fy-sidebar/)

  
## Install

`npm install ng-fy-sidebar`

  

## Usage

  


`import { NgFySidebarModule } from 'ng-fy-sidebar';`

  

add to module imports

```javascript
NgModule({
...
imports: [
	...
	NgFySidebarModule
	...
]
...
})
```

add to html file

```html
<ng-fy-sidebar [data]="sidebarData"></ng-fy-sidebar>
```

  

If u don't use RouterModule u need to add

```javascript
import { RouterModule } from  '@angular/router';
@NgModule({
...
imports:[
	...
	RouterModule.forRoot([])
	...
]
...
})
```
### Page Html
Page html as ng-content
```html
<ng-fy-sidebar [data]="sidebarData">
	Here
</ng-fy-sidebar>
```
  

### Inputs

  

| Name | Type |Default|Description|
|--|--|--|--|
| data| NgFySidebarData[] | null |All data|

### Interfaces
```javascript
export  interface  NgFySidebarData {
	topbarDataRight?:  NgFySidebarTopbarItemData[],
	topbarDataLeft?:  NgFySidebarTopbarItemData[],
	logo?:  string,
	mobileLogo?:  string,
	sidebarData:  NgFySidebarItemData[],
	sidebarClosed?:  boolean,
	mobileRightSidebarClosed?:  boolean,
	mobileRightSidebar:NgFySidebarItemData[]
}

export  interface  NgFySidebarTopbarItemData {
	title:  string,
	icon?:  string,
	link?:  string,
	onClick?:  Function,
	children?:  NgFySidebarTopbarItemChildData[],
	open?:  boolean,
}
```
Cant set link, onClick and children sametime,
children > onClick > link
link is use Router.NavigateByUrl
```javascript
export  interface  NgFySidebarTopbarItemChildData {
	title:  string,
	icon?:  string,
	link?:  string,
	onClick?:  Function,
}

export  interface  NgFySidebarItemData {
	title:  string,
	icon?:  string,
	onClick?:  Function,
	children?:  NgFySidebarItemData[],
	link?:  string,
	open?:  boolean,
	childHeigth?:  number
}
```

[For Feedbacks or Problems](mailto:tahsincesur1@gmail.com)