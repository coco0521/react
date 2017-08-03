# clear the useless files
rm -fr ./dist/*.htmlg

# backup sources to svn
cd ../../
git archive --format tar --output "./output_src.tar" master
mv ./output_src.tar /Users/liugenbin/Downloads/XinLeJuSourcesSvn/erp_cloud_im/web/pc_message_dashboard

cd /Users/liugenbin/Downloads/XinLeJuSourcesSvn/erp_cloud_im/web/pc_message_dashboard
tar -xvf output_src.tar
rm -fr output_src.tar
